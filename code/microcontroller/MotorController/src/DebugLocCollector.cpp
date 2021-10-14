#include "DebugLogCollector.hpp"

DebugLogCollector::DebugLogCollector()
{
}

DebugLogCollector::~DebugLogCollector()
{
}

void DebugLogCollector::log(String message)
{
    this->messageBuffer.push_back(message);
}

void DebugLogCollector::resetBuffer()
{
    this->messageBuffer.clear();
}

void DebugLogCollector::addMessagesToJson(ArduinoJson::JsonArray jsonArray)
{
    for (auto const &string : this->messageBuffer)
    {
        jsonArray.add(string);
    }
}