/*
Print een driehoek van sterretjes*/

let rows = parseInt(prompt("Voer het aantal rijen in:"));

for (let i = 1; i <= rows; i++){
    let line = '';
    for (let j = 1; j <= i; j++){
        line += '*';
    }
    console.log(line);
}


// Te moeilijk