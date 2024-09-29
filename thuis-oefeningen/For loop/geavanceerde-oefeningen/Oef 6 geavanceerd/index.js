/*
Vind de grootste deler van een getal.

Vraag een getal aan de gebruiker en gebruik een for-loop om de grootste deler
van dat getal (anders dan het getal zelf) te vinden.
*/

let getal = parseInt(prompt("Voer een getal in:"));
let grootsteDeler = 1;

for (let i = 1 ; i< getal; i++ ){
  if (getal % i === 0){
    grootsteDeler = i;
  }
}

console.log(grootsteDeler);