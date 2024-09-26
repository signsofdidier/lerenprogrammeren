//Bepalen opf het ingevoerde getal negatief of positief

let getal = parseInt(prompt("Geef een getal"));

if (getal >= 0){
    console.log("Het getal is positief");
}else{
    console.log("het getal is negatief");
}


// geef een jaartal? zeg als het een schrikkeljaar is of niet
//het jaartal deelbaar is door 4,maar niet door 100 – tenzij het jaartal deelbaar door 400 is

let jaartal = parseInt(prompt("Geef een jaartal"));

//testen van mijn logica
if((jaartal%4 === 0 && jaartal%100 !== 0) || (jaartal % 400 === 0)){
    console.log(`${jaartal} is een schrikkeljaar`);
}else {
    console.log(`${jaartal} is een schrikkeljaar`);
}

//stappen: eerst alles indelen in kleine probleempjes
// if((jaartal%4 === 0 && jaartal%100 !== 0) || (jaartal % 400 === 0)) tussen extra haakjes want alles is binnen 1 berekening
// && wil zeggen dat berekening ervoor en erna binnen hetzelfde haakje beide juist zijn
// ||  Dit is OR en wil zeggen dat als de eerste berekening een false geeft maar de berkening na de OR juist is dat het door mag, dit OR dat


