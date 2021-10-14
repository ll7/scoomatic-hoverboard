#pragma once

/**
 * @brief Loop period for main loop, should be a fraction of every other period value
 * 
 */
#define LOOP_PERIOD_MS 10

/**
 * @brief The period in ms when new upstream data (sensor values etc) are sent to the master
 * 
 */
#define UPSTREAM_UPDATE_PERIOD_MS  30

/**
 * @brief The period new steering commands are sent to the hover board
 * 
 */
#define MOTOR_COMMAND_SEND_PERIOD_MS 20

/**
 * @brief Time out after that an emergency stop is fired because no new control commands are received from the master
 * 
 */
#define CONTROL_INPUT_TIMEOUT_MS 500

/**
 * @brief Whether the im u parts should be active
 * 
 */
// #define IMU_ACTIVE 0

/**
 * @brief Period for checking if imu is corresponding now
 * 
 */
#define IMU_INIT_ATTEMPT_PERIOD_MS 1000

/**
 * @brief Pins for the hoverboard diag interface
 * 
 */
#define UART_DIAG_PIN_RX 18
#define UART_DIAG_PIN_TX 19

/**
 * @brief Pin for the dead mans switch signal 
 * 
 */
#define E_STOP_PIN 32

/**
 * @brief Pin for indicating bad state
 * 
 */
#define BAD_STATE_LED_PIN 33

/**
 * @brief The maximum speed that is allowed
 * 
 * Limit the speed to [-MAX_SPEED, MAX_SPEED]
 * 
 * This is used for testing and safety during development
 *  
 * values exceeding 1000 are ignored
 */
#define MAX_SPEED 500

/**
 * @brief The maximum steer that is allowed
 * 
 * Limit the steer to [-MAX_STEER, MAX_STEER]
 * 
 * This is used for testing and safety during development
 * 
 * values exceeding 1000 are ignored
 */
#define MAX_STEER 500
