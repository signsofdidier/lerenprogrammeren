/*
Print de tafel van 5: Gebruik een for-loop om de tafel van 5 (5, 10, 15, ..., 50) te
printen*/

// tafel
// eindgetal = 50
// 5 + 5 + 5 ...

let tafel = parseInt(prompt("Geef een tafel tussen 1 en 25"));
let eindGetal = 50;

for(i=tafel ; i <= eindGetal ; i += tafel ){
    console.log(i);
}


