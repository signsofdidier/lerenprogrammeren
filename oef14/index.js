
/*
*
* *
* * *
* * * *
* * * * *
* */

let ster = "*";
let aantalLijnen = parseInt(prompt("Geef het aantal lijnen"));

for(let lijn = 1;lijn<=aantalLijnen;lijn++){ // lijn is de i
    console.log(ster);
    ster = ster + "*"; // de 2de mag niet de let ster zijn want anders verdubbeld het. Als je * zet niet.
}

/*-----------------------------------------------------------------------------------------*/

