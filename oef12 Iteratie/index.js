/*
for loop*/

/*
for (startwaarde;conditie;update (){

}*/

/*let i = 1; // i is startwaarde
for(i;i<5;i++){ // i<5 is conditie // i += 2 gaat per 2 optellen, i *= 2 gaat telkens verdubbelen
    console.log(`Dit is nummer ${i}`);
}*/

/*-----------------------------------------------------------------------------------------*/
/*// zelfde voorbeeld maar met een let (eindgetal) ipv <
let eindGetal = parseInt(prompt("Geef een eindgetal in"));

let i = 1;
for(i;i<eindGetal;i++){
    console.log(`Dit is nummer ${i}`);
}*/

/*-----------------------------------------------------------------------------------------*/

/*
// even getallen
for(let i = 1; i <= 20 ; i++){
    if(i%2===0){
        console.log(i);
    }
}*/

/*-----------------------------------------------------------------------------------------*/

//output: tafel van 1
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5

/*let tafel = parseInt(prompt("Wat is de tafel:?"));
let eindGetal = parseInt(prompt("Wat is het eindegetal"));

for(let i=1 ; i<=eindGetal ; i++) {
    console.log(`${tafel} x ${i} =`, tafel * i);
}*/

/*-----------------------------------------------------------------------------------------*/

// moeilijker, nog niet bekijken hieronder, dit is om elke vraag als prompt te krijgen
/*let hoeveelGetallen = parseInt(prompt("hoeveel getallen wens je in te geven?"));
let getal;
let som=0;

for(let i = 1; i<=hoeveelGetallen;i++){
    getal = parseInt(prompt(`Geef getal ${i} in:`));
    som = som +getal;
}
console.log(som);*/

/*-----------------------------------------------------------------------------------------*/

//Schrijf een programma dat het gemiddelde van de getallen van 1 tot en met 10 berekent.
//i
// som
//resultaat
// 1 +2 + 3 + 4 + 5 + 6 + 7 + 8+ 9 + 10 = 55 / 10 = 5.5

/*let i = 1;
let som = 0;
let resultaat = 0;

let eindGetal = parseInt(prompt("eindgetal?"));

for(i;i<=eindGetal;i++){
     som = som + i;
}
resultaat = som / eindGetal;
console.log(resultaat);*/

/*-----------------------------------------------------------------------------------------*/

//Schrijf een programma dat de som van alle oneven getallen tussen 1 en 50 berekent.
// i
// som


/*let eindGetal = 50;
let i = 1
let som = 0
let resultaat = 0;

for(i;i<eindGetal;i+=2) {
    som = som + i;
}

console.log(som);*/

/*-----------------------------------------------------------------------------------------*/

//Schrijf een programma dat de getallen van 10 tot 1 in omgekeerde volgorde afdrukt.

let i = 1;
let eindGetal = 10;

for(let i = eindGetal; i >= 1 ; i--){
    console.log(i);
}
