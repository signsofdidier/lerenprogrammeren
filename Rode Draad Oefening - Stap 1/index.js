/*
* Schrijf een programma dat het totale bedrag berekent dat je moet betalen in een winkel
* op basis van het aantal producten dat je koopt en de prijs per product.
* Als je meer dan 10 producten koopt, krijg je 10% korting, anders betaal je de volle prijs.
* */

/*let aantalProducten = parseInt(prompt("Geef een aantal in:"));
let prijsPerProduct = parseFloat(prompt("Geef de prijs in"));  // in euro's

// Bereken de totale prijs zonder korting
let totalePrijs = aantalProducten * prijsPerProduct;

if (aantalProducten > 10) {
    // Bereken 10% korting
    let korting = totalePrijs * 0.10;
    totalePrijs = totalePrijs - korting;  // Pas de korting toe
}

console.log("Het totale bedrag is: €" + totalePrijs.toFixed(2));*/

//


let aantalProducten = parseInt(prompt("Geef een aantal in"));
let prijsPerProduct = parseFloat(prompt("Geef de prijs in"));

// Bereken de totale prijs zonder korting
let totalePrijs = aantalProducten * prijsPerProduct;

if (prijsPerProduct >= 100){
    //bereken korting van 10%
    let korting1 = totalePrijs * 0.10;
    totalePrijs = totalePrijs - korting1; // pas de korting toe
    console.log("Het totale bedrag is: €" + totalePrijs.toFixed(2));
}
else if (prijsPerProduct >= 50 && prijsPerProduct <= 100){
    let korting2 = totalePrijs * 0.05;
    totalePrijs = totalePrijs - korting2;
    console.log("Het totale bedrag is: €" + totalePrijs.toFixed(2));
}
else {
    console.log("Het totale bedrag is: €" + totalePrijs.toFixed(2));
}

