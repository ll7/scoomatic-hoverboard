#pragma once

#include "Arduino.h"
#include "ArduinoJson.hpp"

class DebugLogCollector
{
private:
    std::vector<String> messageBuffer;

public:
    DebugLogCollector();
    ~DebugLogCollector();

    /**
     * @brief Clear the buffer to get rid of old messages
     * 
     */
    void resetBuffer();

    /**
     * @brief Adds the given string to message buffer -> it will be sent to the master later
     * 
     * @param message the message for the master
     */
    void log(String message);

    /**
     * @brief Extracts the messages and append them to the given json array.
     * 
     * @param jsonDoc the json array
     */
    void addMessagesToJson(ArduinoJson::JsonArray jsonArray);
};