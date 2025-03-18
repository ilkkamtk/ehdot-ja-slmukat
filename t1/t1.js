'use strict';

const tempInC = +parseFloat(prompt('Anna asteet selssiuksina'));

const tempInF = (tempInC * 9) / 5 + 32;

document.querySelector(
  '#target'
).innerHTML = `${tempInC}°C on faarenhaitteina ${tempInF}°F`;
