/*
Print getallen die een bepaald patroon volgen: Print de getallenreeks 1, 2, 4, 8, 16,
    32, ..., totdat de waarde groter is dan een door de gebruiker opgegeven getal*/

let eindGetal = parseInt(prompt("Geef een eindgetal in"));

for ( let i = 1 ; i <= eindGetal ; i*=2 ){
   console.log(i);
}



// Nu hetzelfde met output en commas
/*
let eindGetal = parseInt(prompt("Geef een eindgetal in"));
let output ="";

for ( let i = 1 ; i <= eindGetal ; i*=2 ){
   if (i * 2 < eindGetal){
     output += `${i}, `;
   } else{
     output += `${i}`;
   }
}

console.log(output);*/
