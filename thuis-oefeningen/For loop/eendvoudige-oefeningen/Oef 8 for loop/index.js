/*
Product van de eerste 5 getallen: Gebruik een for-loop om het product van de eerste 5
getallen (1, 2, 3, 4, 5) te berekenen.*/

// product = 1

let product = 1;

for(let i = 1 ; i<=5 ; i++ ){
    product *= i;
}

console.log(`Het product van de eerste 5 getallen is ${product}.`);


// TIP: product *= i is hetzelfde als product = product * i