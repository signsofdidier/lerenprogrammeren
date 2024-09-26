/*
Som van de eerste 10 getallen: Gebruik een for-loop om de som van de eerste 10
getallen (1 tot 10) te berekenen.*/

// getal start vanaf 1 en eindigd op 10
// i = 1
// eindGetal = 10
// som
let som = 0;

for( let i = 1 ; i <= 10  ; i++  ){
    som = som + i;
}

console.log(`De som van de eerste 10 getallen is ${som}.`);