/*
Print de tafel van een gegeven getal: Vraag een getal aan de gebruiker en gebruik een
for-loop om de tafel van dat getal te printen*/

let tafel = parseInt(prompt("Geef een getal in:"));
let eindGetal = 10;

for(let i = 1 ; i <= eindGetal ; i++ ){
    /*console.log(`${i} x ${tafel} =`, tafel * i);*/ // TIP: comma zetten na ``, ..  ) om .. uit te voeren
    console.log(tafel * i); // gewone opsomming van getallen
    }



