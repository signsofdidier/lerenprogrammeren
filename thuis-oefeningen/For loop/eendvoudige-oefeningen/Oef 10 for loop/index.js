/*
Print de tafel van een gegeven getal: Vraag een getal aan de gebruiker en gebruik een
for-loop om de tafel van dat getal te printen*/

// getal vragen voor de tafel
// 1 x 5 = 5
// 2 x 5 = 10
// ..
// 5 is hier de tafel
// de optelling is de i

let tafel = parseInt(prompt("Van welk getal wil jij de tafel berekenen?"));

for (let i = 1 ; i<=5 ; i++){
    console.log(`${i} x ${tafel} =`, tafel * i);
}

// Toon de tafel door middel van de console log. Gebruik de , na ` om de berekening te kunnen doen.