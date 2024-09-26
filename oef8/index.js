/*
Maak een programma dat drie cijfers van een gebruiker accepteert en het grootste van de drie weergeeft.
De drie variabelen mogen gewoon gedeclareerd worden. Bijv. Let nummer1=10, nummer2=5,..*/

/*let nummer1 = 15, nummer2 = 25, nummer3 = 5;*/

let nummer1 = parseInt(prompt("getal?"));
let nummer2 = parseInt(prompt("getal2?"));
let nummer3 = parseInt(prompt("getal3?"));

// accepteer het grootste getal van de 3
if (nummer1 >= nummer2 && nummer1 >= nummer3){
    console.log(`het grootste getal is ${nummer1}`);
}else if (nummer2 >= nummer1 && nummer2 >= nummer3){
    console.log(`het grootste getal is ${nummer2}`);
}else{
    console.log(`het grootste getal is ${nummer3}`);
}


// andere makkelijkere oplossing

/*
let nummer1 = 15, nummer2 = 25, nummer3 = 5;
let grootste = Math.max(nummer1, nummer2, nummer3)
    console.log(`${grootste} is het grootste getal.`)
*/
