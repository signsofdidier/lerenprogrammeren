
/*
Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print
de veelvouden van dat getal tot 100.
*/

let getal = parseInt(prompt("Geef een getal in:"));

for (let i = 1; i <= 100  ; i++){
    if (i % getal === 0){
        console.log(i);
    }
}