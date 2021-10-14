#pragma once

#include "MotorDriverCom.hpp"
#include "DebugLogCollector.hpp"

#include "config.h"

/**
 * @brief Wrapper for the communication with the master via uart to exchange data like new commands and the current sensor readings
 * 
 */
class MasterControlCom
{
private:
    /* data */

    /**
     * @brief  HardwareSerial interface for the communication with the master pc e.g. the jetson board
     * 
     */
    HardwareSerial *masterSerial;

    /**
     * @brief JsonDocument to create the leaving json formatted message
     * 
     */
    StaticJsonDocument<500> tx_doc;

    DebugLogCollector *logCollector;

    /* methods */

public:
    /**
     * @brief Construct a new Master Control Com object and the log message are ignored
     * 
     * @param masterSerial  HardwareSerial interface for the communication with the master pc e.g. the jetson board
     */
    MasterControlCom(HardwareSerial *masterSerial);

    /**
     * @brief Construct a new Master Control Com object and the log message are ignored
     * 
     * @param masterSerial  HardwareSerial interface for the communication with the master pc e.g. the jetson board
     * @param logCollector reference to the log collector that will provide the log message 
     */
    MasterControlCom(HardwareSerial *masterSerial, DebugLogCollector *logCollector);

    ~MasterControlCom();

    
    /**
     * @brief Initializes the interface but expects that the pins were correctly initialized
     * 
     */
    void begin();

    /**
     * @brief Look for the control commands
     * 
     * if control_in.updated is false no new command was received
     * 
     * @return control_in 
     */
    control_in receive_control();

    /**
     * @brief Send the new sensor readings to the master
     * 
     * @param motorDiagData the new motor diagnosis data
     * @param imuData the current imu data
     * @param e_stop whether an emergency stop is active
     */
    void send(MotorDiagDataUpdate motorDiagData, ImuData imuData,boolean e_stop);

};
