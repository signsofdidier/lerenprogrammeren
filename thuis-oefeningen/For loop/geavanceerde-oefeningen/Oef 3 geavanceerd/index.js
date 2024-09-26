/*
Print getallen die een bepaald patroon volgen: Print de getallenreeks 1, 2, 4, 8, 16,
    32, ..., totdat de waarde groter is dan een door de gebruiker opgegeven getal*/

// getal van klant
// for loop dat alles verdubbelt
// als waarde groter is dan getal van klant moet het stoppen (if statement)

let getal = parseInt(prompt("Geef een getal in"));

for ( let i = 1 ; i<=getal ; i *= 2 ){
 console.log(i);
}
