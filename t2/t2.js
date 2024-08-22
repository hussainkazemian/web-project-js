'use strict';

function calculateDistance() {
  // Get the values from the input fields
  const point1 = document.getElementById('point1').value;
  const point2 = document.getElementById('point2').value;

  // Split the input strings to get x and y values
  const [x1, y1] = point1.split(',').map(Number);
  const [x2, y2] = point2.split(',').map(Number);

  // Calculate the Euclidean distance
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  // Display the result in the HTML document
  document.getElementById(
    'target'
  ).innerText = `The distance between the points is: ${distance.toFixed(2)}`;
}
