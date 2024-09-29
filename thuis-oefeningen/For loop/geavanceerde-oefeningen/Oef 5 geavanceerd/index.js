/*
Bereken de som van de cijfers in een getal
Vraag een getal aan de gebruiker en bereken de som svan de cijfers in dat getal (bijv. bij 1234 is de som 1+2+3+4=10)

*/

let number = parseInt(prompt("Voer een getal in:"));
let sum = 0;

for (let i = number; i > 0; i = (i - (i % 10)) / 10 ) {
  sum += i % 10;
}

console.log(sum);

// Te moeilijk