/*
Print priemgetallen: Gebruik een for-loop om alle priemgetallen tussen 1 en 100 te
printen.*/
// priemgetallen = 1 2 3 5 7 11 13..
// getallen die niet deelbaar zijn door 2, 3 en 5, maar 2, 3 en 5 zijn wel priemgetallen

for (let i = 2 ; i<=100 ; i++ ){
    if(i%2 !== 0 && i%3!==0 && i%5!==0){
        console.log(i);
    }else if(i === 2 || i === 3 || i === 5){
        console.log(i);
    }
}