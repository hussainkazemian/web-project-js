/*
'use strict';
const kohde = document.querySelector('#target');

const sivu1 = +prompt('syötä ekä sivu');
const sivu2 = +prompt('syötä toka sivu');
const sivu3 = +prompt('syötä komas sivu');
console.log((sivu1 === sivu2) === sivu3);

if (sivu1 === sivu2 && sivu2 === sivu3) {
  // tasasivuinen
  kohde.innerHTML = 'kolmio on tassasivuinen';
} else if (sivu1 !== sivu2 && sivu2 !== sivu3 && sivu3 !== sivu1) {
  // epäsäänöinen
  kohde.innerHTML = 'kolmio on epäsäänöinen';
} else {
  kohde.innerHTML = 'kolmio ib tassakylkinen';
}
*/
'use strict';

const kohde = document.querySelector('#target');

// Prompt the user to enter the lengths of the three sides
const sivu1 = +prompt('Syötä ensimmäinen sivu');
const sivu2 = +prompt('Syötä toinen sivu');
const sivu3 = +prompt('Syötä kolmas sivu');

// Check if the inputs form a valid triangle
if (sivu1 + sivu2 > sivu3 && sivu1 + sivu3 > sivu2 && sivu2 + sivu3 > sivu1) {
  // Determine the type of triangle
  if (sivu1 === sivu2 && sivu2 === sivu3) {
    // Equilateral triangle
    kohde.innerHTML = 'Kolmio on tasasivuinen';
  } else if (sivu1 === sivu2 || sivu2 === sivu3 || sivu1 === sivu3) {
    // Isosceles triangle
    kohde.innerHTML = 'Kolmio on tasakylkinen';
  } else {
    // Scalene triangle
    kohde.innerHTML = 'Kolmio on epäsäännöllinen';
  }
} else {
  // The inputs do not form a valid triangle
  kohde.innerHTML = 'Syötetyt mitat eivät muodosta kolmiota';
}
