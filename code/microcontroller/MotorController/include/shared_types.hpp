#pragma once

#include <Arduino.h>

/**
 * @brief Structure to wrap the controll commands for the hoverboard
 * 
 * updated indicates whether this structure contains new data
 * 
 */
struct control_in
{
    boolean updated = false;
    int16_t speed = 0;
    int16_t steer = 0;
};

/**
 * @brief Wrapper for motor diagnosis information
 * 
 */
struct MotorDiagData
{
    int16_t adc1;
    int16_t adc2;
    int16_t speed_l;
    int16_t speed_r;
    int16_t batteryCal;
    double batteryVoltage;
    int16_t tempCal;
    int16_t temp;
};

/**
 * @brief Wrapper around the motor diagnosis structure to be able to mark whether new data was received
 * 
 * updated indicates whether this structure contains new data
 * 
 */
struct MotorDiagDataUpdate
{
    MotorDiagData diagData;
    bool updated = false;
};

/**
 * @brief Wrapper for the imu data to reduce the parameters per function
 * 
 */
struct ImuData
{
    // whether there is new data inside the struct
    bool filled = false;
    float ax = 0;
    float ay = 0;
    float az = 0;
    float gx = 0;
    float gy = 0;
    float gz = 0;
};