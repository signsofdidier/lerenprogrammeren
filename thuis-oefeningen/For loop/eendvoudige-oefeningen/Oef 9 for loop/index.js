/*
Print getallen die deelbaar zijn door 3: Gebruik een for-loop om getallen van 1 tot 30
te printen die deelbaar zijn door 3.*/

// getallen tussen 1 en 30

for( let i = 1 ; i <= 30 ; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

// Hier moet geen else statement staan omdat de if genoeg is.
// i % 3 === 0  als i deelbaar is door 3 en 0 (dus niets dat overblijft) mag de if statement doorgaan.