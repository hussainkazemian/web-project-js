'use strict';
function calculateSum() {
  // Get the input value
  const number = parseInt(document.getElementById('number').value);

  // Validate input
  if (isNaN(number) || number <= 0) {
    document.getElementById('result').innerText =
      'Please enter a positive integer.';
    return;
  }

  // Calculate the sum of natural numbers up to and including the input number
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  // Display the result
  document.getElementById(
    'target'
  ).innerText = `The sum of natural numbers up to ${number} is: ${sum}`;
}
