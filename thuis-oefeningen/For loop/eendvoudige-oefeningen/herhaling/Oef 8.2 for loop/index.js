/*
Product van de eerste 5 getallen: Gebruik een for-loop om het product van de eerste 5
getallen (1, 2, 3, 4, 5) te berekenen.*/

let product = 1;

for (let i = 1  ;  i<=5 ; i++ ){
    /*product = product * i;*/
    product *= i;
}

console.log(product);