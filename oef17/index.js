// oef 1.2.14 Oefening 14 For loop

// stop vanaf 0 en eronder
//maak de som van de ingegeven getallen tot iemand op 0 of negatief ingeeft.

// output is de som van de gegeven getallen

let som = 0;
let getal;

for(;;){
    //vraag aan de gebruiker je getal
    getal = parseInt(prompt("Geef een getal?"));

    //controle negatief getal
    if(getal<0){
        break;
    }
    //tel het getal op bij de som
    som +=getal;
}
console.log(som);

// MOEILIJK EN NIET HELEMAAL LEREN, WE LEREN HIER DE WHILE LOOP VOOR