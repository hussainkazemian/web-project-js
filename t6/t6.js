'use strice';
function generateTable() {
  // Prompt user for a positive integer
  const userInput = prompt('Enter a positive integer:');
  const number = parseInt(userInput);

  // Validate input
  if (isNaN(number) || number <= 0) {
    alert('Please enter a valid positive integer.');
    return;
  }

  // Generate the multiplication table
  let tableHTML = '<table>';

  // Create table rows
  for (let i = 1; i <= number; i++) {
    tableHTML += '<tr>';
    for (let j = 1; j <= number; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += '</tr>';
  }

  tableHTML += '</table>';

  // Display the table in the HTML document
  document.getElementById('target').innerHTML = tableHTML;
}
