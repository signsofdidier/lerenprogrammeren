/*
Print getallen tussen 1 en n die deelbaar zijn door 5: Vraag een getal n aan de
gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5.
*/

// getal van de gebruiken

// print enkel de getallen tussen 1 en n die deelbaar zijn door 5

let getal = parseInt(prompt("Geef een getal"));

for ( let i = 1 ; i<=getal  ; i++ ){
    if(i%5===0){
        console.log(i);
    }
}

