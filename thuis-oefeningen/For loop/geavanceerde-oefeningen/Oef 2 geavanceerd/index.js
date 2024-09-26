/*
Print priemgetallen: Gebruik een for-loop om alle priemgetallen tussen 1 en 100 te
printen.*/
// priemgetallen = 1 2 3 5 8 13..

// getallen niet deelbaar 2, 3 of 5;
// de getallen 2, 3 en 5 die zelf een priem getal zijn moeten uitzondering krijgen

/*
for ( let i = 2 ; i<100 ; i++ ){
    if (i%2!==0 && i%3!==0 && i%5!==0){
        console.log(i);
    }
}*/

for (let i = 2; i < 100; i++) {
    if (i === 2 || i === 3 || i === 5) {
        console.log(i);  // Print de priemgetallen 2, 3, en 5
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);  // Print andere priemgetallen
    }
}
