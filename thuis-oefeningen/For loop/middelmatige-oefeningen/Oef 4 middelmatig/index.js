/*
Som van de eerste n getallen: Vraag een getal n aan de gebruiker en bereken de som van
de getallen van 1 tot n.
*/

let som = 0;

for ( let i = 1 ; i<=5 ; i++ ){
    let getal = parseInt(prompt("Geef een getal in"));
    som = som + getal;
}

console.log(som);