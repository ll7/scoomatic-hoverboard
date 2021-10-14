#include "MasterControlCom.hpp"
#include <HardwareSerial.h>
#include "myUtils.hpp"

// Begin motor Driver

MasterControlCom::MasterControlCom(HardwareSerial *masterSerial)
{
    this->masterSerial = masterSerial;
    this->logCollector = nullptr;
}

MasterControlCom::MasterControlCom(HardwareSerial *masterSerial, DebugLogCollector *logCollector)
{
    this->masterSerial = masterSerial;
    this->logCollector = logCollector;
}

MasterControlCom::~MasterControlCom()
{
}

void MasterControlCom::begin()
{

    this->masterSerial->begin(115200, SERIAL_8N1, 23, 1);
}

void MasterControlCom::send(MotorDiagDataUpdate motorDiagData, ImuData imuData,boolean e_stop)
{
    // clear the document to get rid of old data
    tx_doc.clear();
    if (motorDiagData.updated)
    {
        tx_doc["adc1"] = motorDiagData.diagData.adc1;
        tx_doc["adc2"] = motorDiagData.diagData.adc2;
        tx_doc["speed_l"] = motorDiagData.diagData.speed_l;
        tx_doc["steer_r"] = motorDiagData.diagData.speed_r;
        tx_doc["batteryCal"] = motorDiagData.diagData.batteryCal;
        tx_doc["batteryVoltage"] = motorDiagData.diagData.batteryVoltage;
        tx_doc["tempCal"] = motorDiagData.diagData.tempCal;
        tx_doc["temp"] = motorDiagData.diagData.temp;
    }
    #ifdef IMU_ACTIVE    
    if (imuData.filled){
        JsonObject imuJson=tx_doc.createNestedObject("imu");
        imuJson["ax"] = imuData.ax;
        imuJson["ay"] = imuData.ay;
        imuJson["az"] = imuData.az;
        imuJson["gx"] = imuData.gx;
        imuJson["gy"] = imuData.gy;
        imuJson["gz"] = imuData.gz;
    }
    #endif
    tx_doc["emergency_stop"] = e_stop;

    if (&this->logCollector != nullptr)
    {
        // add the debug data
        JsonArray debugArray = tx_doc.createNestedArray("debug");
        this->logCollector->addMessagesToJson(debugArray);
    }

    serializeJson(tx_doc, *this->masterSerial);
    this->masterSerial->println();
}

control_in MasterControlCom::receive_control()
{
    // format "[speed];[steer]\r\n"
    struct control_in result;

    if (this->masterSerial->available() == 0)
    {
        return result;
    }

    String input;
    while (this->masterSerial->available() > 0)
    {
        input = this->masterSerial->readStringUntil('\n');
        input.trim();
    }
    if (input.length() > 0)
    {
        // Extract the data by splitting
        input.replace("\r", "");
        input.replace("\n", "");
        auto data = split(";", input);

        if (data.size() != 2)
        {
            this->logCollector->log("Control input: Data size missmatch:'" + input + "'.");
            return result;
        }

        result.speed = (int16_t)data[0].toInt();
        result.steer = (int16_t)data[1].toInt();
        result.updated = true;
    }

    return result;
}
