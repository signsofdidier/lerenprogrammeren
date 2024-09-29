/*
Som van de oneven getallen: Gebruik een for-loop om de som van de oneven getallen
van 1 tot 100 te berekenen.*/

let som = 0;

for (let i = 1 ; i<=100 ; i+=2){
    som += i;
}

console.log(som);