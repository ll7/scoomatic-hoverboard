#include <Arduino.h>

#include "DebugLogCollector.hpp"
#include "MotorDriverCom.hpp"
#include "MasterControlCom.hpp"
#include "shared_types.hpp"

#include "config.h"

#include "mpu9250.h"

/*
 * E-Stop escalation per step
 * 1. Set e stop to false
 * 2. If emergency stop switch(=dead man's switch) is pulled/triggered -> e_stop
 * 3. Last control message is older than x milliseconds  -> e_stop
 *  
*/

// Timing variables
/**
 * @brief Time stamp in ms when the last upstream update was sent to the master
 * 
 */
long last_upstream_update = 0;

/**
 * @brief Time stamp in ms when the last steering was sent to the hoverboard
 * 
 */
long last_command_update;

//  connector/ interface variables
DebugLogCollector *logger;
MotorDriverCom *comDriver;
MasterControlCom *controllCom;
// Interface for the imu
Mpu9250 mpu9250(&Wire, 0x68);
bool imuOnline = false;
long last_imut_init_attempt;

void imuInit(){

  imuOnline = mpu9250.Begin();
  if (!imuOnline)
  {
    Serial.println("Panic: imu not reachable. Try again");
    return;
  }

  imuOnline = mpu9250.ConfigDlpf(Mpu9250::DLPF_BANDWIDTH_20HZ);
  if(!imuOnline){
    Serial.println("Panic: Imu low pass filter config failed");
    return;
  }
  
  imuOnline = mpu9250.ConfigAccelRange(Mpu9250::ACCEL_RANGE_8G);
  if(!imuOnline){
    Serial.println("Panic: Imu accel range config failed");
    return;
  }
  imuOnline = mpu9250.ConfigGyroRange(Mpu9250::GYRO_RANGE_1000DPS);
  if(!imuOnline){
    Serial.println("Panic: Imu gyro range config failed");
    return;
  }

}

void setup()
{
  logger = new DebugLogCollector();
  comDriver = new MotorDriverCom(&Serial2, &Serial1, logger);
  controllCom = new MasterControlCom(&Serial, logger);

  // Serial Interface for diag data
  pinMode(UART_DIAG_PIN_RX, INPUT);
  pinMode(UART_DIAG_PIN_TX, OUTPUT);

  // E-Stop signal
  pinMode(E_STOP_PIN, INPUT);

  // LED
  pinMode(BAD_STATE_LED_PIN, OUTPUT);
  digitalWrite(BAD_STATE_LED_PIN, HIGH);

  comDriver->begin();
  controllCom->begin();

  imuInit();

  digitalWrite(BAD_STATE_LED_PIN, LOW);
}

/**
 * @brief whether the dead man's switch is still active
 * 
 * @return boolean whether the dead man's switch is still active
 */
boolean isDeadMansSwitchActive();

/**
 * @brief Retrieves the imu data
 *
 * @return ImuData the new imu data (every value is 0 if no data could be retrieved)
 */
ImuData retrieveImuData();

void loop()
{
  const long curr_millis = millis();

  #ifdef IMU_ACTIVE
  if(!imuOnline){
    if(curr_millis - last_imut_init_attempt>= IMU_INIT_ATTEMPT_PERIOD_MS){
      imuInit();
      digitalWrite(BAD_STATE_LED_PIN, !digitalRead(BAD_STATE_LED_PIN));
      last_imut_init_attempt = curr_millis;
    }
  }
  #endif


  // get the control data
  control_in newControl = controllCom->receive_control();

  if (curr_millis - last_command_update >= MOTOR_COMMAND_SEND_PERIOD_MS)
  {
    last_command_update = curr_millis;
    // Check for deadman switch and send new control to motor controller
    comDriver->update_control(newControl, isDeadMansSwitchActive());
  }

  // Get virtual e_stop state (= no new commands)
  bool e_stop = comDriver->isEmergencyStopActive();

  // only send new data every x ms but let loop run more often to prevent growing uart buffer
  const MotorDiagDataUpdate diagData = comDriver->checkForDiagData();
  if (curr_millis - last_upstream_update >= UPSTREAM_UPDATE_PERIOD_MS)
  {
    last_upstream_update = curr_millis;
    // Get new diag_data and pass it to the controll communication interface
    controllCom->send(
        diagData,
        retrieveImuData(),
        e_stop);

    // clear the logger after every send -> the master will hopefully have received our important messages
    logger->resetBuffer();
  }
  // If there is an e_stop, indicate it with an active led
  if (e_stop)
  {
    digitalWrite(BAD_STATE_LED_PIN, HIGH);
  }
  else
  {
    digitalWrite(BAD_STATE_LED_PIN, LOW);
  }
  // dynamic delay code -> only wait so long that the period for the main loop is kept but not longer to keep the timing
  delay(
      constrain(
          LOOP_PERIOD_MS - (millis() - curr_millis), // period millis minus work time (=millis()-millis_at_start) equals the remaining during for the delay
          0,                                         // no negative delay
          LOOP_PERIOD_MS                             // It is impossible that we have to wait longer than our loop period, because we do some computing
          ));
}

boolean isDeadMansSwitchActive()
{
  bool active = digitalRead(E_STOP_PIN) == LOW;
  if (!active)
  {
    logger->log("Dead man switch signal missing.");
  }
  return active;
}
ImuData retrieveImuData()
{
  ImuData data;
  #ifdef IMU_ACTIVE

  if (mpu9250.Read())
  {
    data.filled = false;
    data.ax = mpu9250.accel_x_mps2();
    data.ay = mpu9250.accel_y_mps2();
    data.az = mpu9250.accel_z_mps2();
    data.gx = mpu9250.gyro_x_radps();
    data.gy = mpu9250.gyro_y_radps();
    data.gz = mpu9250.gyro_z_radps();
  }else {
    logger->log("Imu read failed");
  }
  #endif
  return data;
}