#include "MotorDriverCom.hpp"
#include <HardwareSerial.h>
#include "myUtils.hpp"

// Begin motor Driver

MotorDriverCom::MotorDriverCom(HardwareSerial *controlSerial, HardwareSerial *diagSerial, DebugLogCollector *logger)
{
    this->controlSerial = controlSerial;
    this->diagSerial = diagSerial;
    this->logger = logger;
}

MotorDriverCom::~MotorDriverCom()
{
}

void MotorDriverCom::begin()
{
    // Serial interface for control data
    this->controlSerial->begin(19200);

    this->diagSerial->begin(115200, SERIAL_8N1, UART_DIAG_PIN_RX, UART_DIAG_PIN_TX);
    // reset the last update flag;
    this->last_update = 0;
    // reset speed values
    this->rel_speed = 0;
    this->rel_steer = 0;
    // reset e stop state
    this->emergency_stop = false;
}

void MotorDriverCom::update_control(control_in newControl, boolean deadMansSwitchActive)
{

    // only reset emergency stop when standing still
    if (this->rel_speed == 0 && this->rel_steer == 0)
    {
        this->emergency_stop = false;
    }

    if (newControl.updated)
    {   
        // only accept the command if there is no e stop
        if(!this->emergency_stop){
            this->rel_speed = newControl.speed;
            this->rel_steer = newControl.steer;
        }
        this->last_update = millis();
    }
    else if (!this->emergency_stop) // only check for e stop because of missing commands if e stop has not yet been set -> reduce computation
    {
        // start error counting / timeouting
        if ((millis() - this->last_update) >= CONTROL_INPUT_TIMEOUT_MS)
        {
            this->logger->log("Virtual Emergency stop because of missing commands from master.");
            this->emergency_stop = true;
        }
    }

    // Dead man's switch overrides everything
    this->emergency_stop = emergency_stop || !deadMansSwitchActive;

    // slow down until standing still
    if (this->emergency_stop)
    {   
        // Reduce speed
        // TODO extract
        // const int incrementReduction = 40;

        // rel_speed += -sign(rel_speed) * incrementReduction;
        // rel_steer += -sign(rel_steer) * incrementReduction;

        // if (abs(rel_speed) <= (incrementReduction + 1))
        // {
        //     rel_speed = 0;
        // }
        // if (abs(rel_steer) <= (incrementReduction + 1))
        // {
        //     rel_steer = 0;
        // }
        // Full stop
        rel_speed = 0;
        rel_steer = 0;
    }

    // Safety check for borders
    rel_speed = constrain(constrain(rel_speed, -MAX_SPEED, MAX_SPEED), -1000, 1000);
    rel_steer = constrain(constrain(rel_steer, -MAX_STEER, MAX_STEER), -1000, 1000);

    // Send control data
    this->controlSerial->write((uint8_t *)&rel_steer, sizeof(rel_steer));
    this->controlSerial->write((uint8_t *)&rel_speed, sizeof(rel_speed));
}

MotorDiagDataUpdate MotorDriverCom::extractDiagData(String input)
{

    // trailing \r\n was removed
    input.replace("\r", "");
    input.replace("\n", "");

    std::vector<String> pairs = split(" ", input);

    struct MotorDiagDataUpdate diagData;

    if (pairs.size() != 8)
    {
        // If the data doesn't match exactly 8 elements that's suspicious
        logger->log("The diag message from hover board only included " + String(pairs.size()) + "pairs, but 8 were expected.");

        return diagData;
    }

    diagData.updated = true;
    // now split every pair
    for (auto const &pair_string : pairs)
    {
        auto pair = split(":", pair_string);
        if (pair.size() != 2)
        {
            // If the data doesn't match exactly 2 elements that's suspicious

            logger->log("The diag message pair was no pair: " + pair_string);
            diagData.updated = false;
            continue;
        }

        int key = pair[0].toInt();
        int value = pair[1].toInt();

        // now check for all eight possible keys
        switch (key)
        {
        case 1:
            /* adc1 */
            diagData.diagData.adc1 = (int16_t)value;
            break;
        case 2:
            /* adc2 */
            diagData.diagData.adc2 = (int16_t)value;
            break;
        case 3:
            /* speed_l */
            diagData.diagData.speed_l = (int16_t)value;
            break;
        case 4:
            /* speed_r */
            diagData.diagData.speed_r = (int16_t)value;
            break;
        case 5:
            /* batteryCal */
            diagData.diagData.batteryCal = (int16_t)value;
            break;
        case 6:
            /* batteryVoltage */
            diagData.diagData.batteryVoltage = (float)value / 100;
            break;
        case 7:
            /* tempCal */
            diagData.diagData.tempCal = (int16_t)value;
            break;
        case 8:
            /* temp */
            diagData.diagData.temp = (int16_t)value;
            break;
        default:
            logger->log("The diag message contained unknown key '" + String(key) + "'.");
            break;
        }
    }
    return diagData;
}

MotorDiagDataUpdate MotorDriverCom::checkForDiagData()
{
    // Only if new data available
    String input;
    while (this->diagSerial->available() > 0)
    {
        input = this->diagSerial->readStringUntil('\n');
        input.trim();
    }
    if (input.length() > 0)
    {
        return extractDiagData(input);
    }
    else
    {
        MotorDiagDataUpdate diagUpdate;
        return diagUpdate;
    }
}

bool MotorDriverCom::isEmergencyStopActive()
{
    return this->emergency_stop;
}