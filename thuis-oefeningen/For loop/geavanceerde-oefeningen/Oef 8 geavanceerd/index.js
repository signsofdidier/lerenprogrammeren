/*
Som van de Fibonacci-reeks*/

let n = parseInt(prompt("Voer het aantal Fibbonacci-getallen in:"));
let a = 1, b = 1, sum = a + b;
for (let i = 3; i <= n; i++){
    let volgende = a + b;
    sum += volgende;
    a = b;
    b = volgende;
}
console.log(sum);

// Te moeilijk