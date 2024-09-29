// Vraag aan de gebruiker een eindgetal.
// Zorg ervoor dat het resultaat kleiner is dan het eindgetal.
// Zoek zelf het verband.
// Voorbeeld:
// Geef een eindgetal in : 20
// Resultaat: 1, 2, 4, 7, 11, 16, ..

// i telt op = 1, 2, 3, 4..
// je hebt een getal nodig, en telkens komt er de i bij opgetelt = getal = getal + i

let eindGetal = parseInt(prompt("Geef een getal in:"));
let getal = 1;
let output = "";

for (let i=0 ; getal+i <= eindGetal ; i++ ){
    getal += i;
    if (getal+i < eindGetal){
        output = output + `${getal}, `
    }else{
        output = output + `${getal}`
    }
}

console.log(`Resultaat: ${output}`);



