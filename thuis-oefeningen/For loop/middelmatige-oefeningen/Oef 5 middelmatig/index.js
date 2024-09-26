
/*
Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print
de veelvouden van dat getal tot 100.
*/

let veelvoud = parseInt(prompt("Geef een veelvoudgetal"));
let eindGetal = 100;
let som = 0;

for(let i = 1 ; i <= eindGetal ; i++ ){
    som = i * veelvoud;
    if(som <= eindGetal){
        console.log(`${i} * ${veelvoud} =`, som);
    }
}


