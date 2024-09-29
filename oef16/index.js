//Oefening programma die de volgede reeks horizontaal..

// Dit is mijn poging
/*let getal = parseInt(prompt("Geef een getal"));
let output = "";

    for(let i = 1; i <= getal ; i *= 2){
        if(i * 2 < getal){
            output = output + `${i},`;
        }else{
            output = output + `${i}`;
        }
    }

console.log(output);*/

/* ----------------------------------------------------------------------------- */

// dit is van de docent
/*
geef een getal in: 100
1,2,4,8,16,32,64
* */
let getal = parseInt(prompt("geef een getal in:"));
let output= "";

for(let teller=1;teller <= getal;teller = teller * 2){
    if(teller * 2 < getal){
        output = output + `${teller},`
    }else{
        output = output + `${teller}`
    }
}
console.log(output)
