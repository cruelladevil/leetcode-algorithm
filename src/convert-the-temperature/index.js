/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  const convertToKelvin = (celsius) => {
    return celsius + 273.15;
  };
  const convertToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32.0;
  };

  const kelvin = convertToKelvin(celsius);
  const fahrenheit = convertToFahrenheit(celsius);

  return [kelvin, fahrenheit];
};
