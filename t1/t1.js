'use strict';

// Prompt the user for a temperature in Celsius
const celsius = +prompt('Enter temperature in Celsius:');

// Convert the temperature to Fahrenheit
const fahrenheit = (celsius * 9) / 5 + 32;

// Convert the temperature to Kelvin
const kelvin = celsius + 273.15;

const outputElement = document.querySelector('#target');

// Display the results in the HTML document
outputElement.innerHTML = `
  <p>Temperature in Celsius: ${celsius}°C</p>
  <p>Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
  <p>Temperature in Kelvin: ${kelvin.toFixed(2)}K</p>
`;
