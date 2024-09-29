/*
Bereken de faculteit van een getal: Vraag een getal aan de gebruiker en gebruik een
for-loop om de faculteit (factorial) van dat getal te berekenen.*/

// faculteit: 5!=5×4×3×2×1=120
// loop die naar beneden gaat tot 1 en dan in de loop een berekening maakt van alle uitgekomen getallen

let getal = parseInt(prompt("Geef een getal"));
let factorial = 1;

for (let i = getal ; i>=1 ; i-- ){
    factorial *= i;

}
console.log(factorial);