
#pragma once
#include <Arduino.h>

// Util functions

/**
 * Returns the sign of the given int16_t
 * +1 if value > 0
 * 0 if value == 0
 * -1 if value < 0
 */
int16_t sign(int16_t value);

/**
 * Splits the given string in a list of strings by the given delimiter
 */
std::vector<String> split(String delim, String s);
