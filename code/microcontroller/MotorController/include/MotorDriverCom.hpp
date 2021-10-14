#pragma once

#include <Arduino.h>
#include <ArduinoJson.h>

#include "config.h"
#include "shared_types.hpp"
#include "DebugLogCollector.hpp"
/**
 * @brief Wrapper for the motor driver interface of the hoverboard
 * 
 */
class MotorDriverCom
{
private:
  /* data */

  /**
   * @brief HardwareSerial interface for the control commands to the hover board
   * 
   */
  HardwareSerial *controlSerial;
  /**
   * @brief HardwareSerial interface for the diagnose packages from the hover board
   * 
   */
  HardwareSerial *diagSerial;

  /**
   * @brief The logger to collect important debug information
   * 
   */
  DebugLogCollector *logger;

  /**
   * @brief Last time in ms when a control command update was received
   * 
   */
  long last_update;

  /**
   * @brief The last speed command from -1000 to 1000
   * 
   */
  int16_t rel_speed = 0;
  /**
   * @brief The last steer command from -1000 to 1000
   * 
   */
  int16_t rel_steer = 0;

  /**
   * @brief wether the interface is in emergency stop mode
   * This can only be leaved if the speed and steer is 0
   */
  bool emergency_stop;

  /* methods */

  /**
   * @brief Extract the diag data from the given string
   * 
   * @param input the string that should contain the diag data
   * @return MotorDiagDataUpdate the diag data
   */
  MotorDiagDataUpdate extractDiagData(String input);

public:
  /**
 * @brief Construct a new Motor Driver Com object
 * 
 * @param controlSerial HardwareSerial interface for the control commands to the hover board
 * @param diagSerial  HardwareSerial interface for the diagnose packages from the hover board
 */
  MotorDriverCom(HardwareSerial *controlSerial, HardwareSerial *diagSerial, DebugLogCollector *logger);
  ~MotorDriverCom();

  /**
   * @brief Initializes the interface but expects that the pins were correctly initialized
   * 
   */
  void begin();

  /**
   * @brief Update the control command with the given value.
   * 
   * @param newControl the new control command
   * @param deadMansSwitchActive whether the dead man's switch is active -> active is good
   */
  void update_control(control_in newControl, boolean deadMansSwitchActive);

  /**
   * @brief Check the serial interface for new diag and return it if there is new data
   * 
   * @return MotorDiagDataUpdate 
   */
  MotorDiagDataUpdate checkForDiagData();

  /**
   * @brief Whether the emergency stop is active
   * 
   * @return true the emergency stop is active
   * @return false everything is good
   */
  bool isEmergencyStopActive();
};
