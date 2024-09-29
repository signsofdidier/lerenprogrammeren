/*
Som van de eerste n getallen: Vraag een getal n aan de gebruiker en bereken de som van
de getallen van 1 tot n.
*/

let n = parseInt(prompt("Geef een getal in:"));
let som = 0;

for (let i = 1 ; i <= n ; i++ ){
    som += i;
}

console.log(som);