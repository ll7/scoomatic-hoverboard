// Util functions
#include "myUtils.hpp"

int16_t sign(int16_t value)
{
    return ((value > 0) - (value < 0));
}

std::vector<String> split(String delim, String s)
{
    std::vector<String> results;

    auto start = 0U;
    auto end = s.indexOf(delim);
    while (end != -1)
    {
        results.push_back(s.substring(start, end));

        start = end + delim.length();
        end = s.indexOf(delim, start);
    }

    results.push_back(s.substring(start, end));
    return results;
}
