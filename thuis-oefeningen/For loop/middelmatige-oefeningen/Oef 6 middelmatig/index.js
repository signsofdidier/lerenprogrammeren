/*
Som van de even getallen: Gebruik een for-loop om de som van de even getallen van 1
tot 100 te berekenen.*/

// som van even getallen tussen 1 en 100
//

//beide zij correct
/*let som = 0;

for(let i = 0  ; i<=100 ; i += 2 ){
    som = som + i;
}

console.log(som);*/

// deze is beter
let som = 0;

for(let i = 1  ; i<=100 ; i++ ){
    if(i%2===0){
        som += i;
    }

}
console.log(som);
