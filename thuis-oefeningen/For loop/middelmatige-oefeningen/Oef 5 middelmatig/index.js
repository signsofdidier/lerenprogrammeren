/*
Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print
de veelvouden van dat getal tot 100.
*/

// getal vragen aan gebruiken
// stel dat getal 5 is, dan doe je 5 + 5 + 5 + 5 ... tot aan 100

let getal = parseInt(prompt("Geef een getal"));
let output = "";
let som = 0;

for(let i = getal ; i * getal <= 100 ; i++ ){
    if(i<=99){
        output += `${getal} + `;
        som = som + getal;
    }else {
        output += `${getal}`;
    }
}
console.log(`${output} = ${som}`);

/*?????????????????????????????*/

