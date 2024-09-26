//Oefening programma die de volgede reeks horizontaal..

//Vraag getal aan gebruiken
//als getal 100 is tel je oneven getallen vanaf 1 en stop aan 100
//
let getal = parseInt(prompt("Geef een getal"));
let output = "";

    for(let i = 1; i <= getal ; i *= 2){
        if(i * 2 < getal){
            output = output + `${i},`;
        }else{
            output = output + `${i}`;
        }
    }

console.log(output);




