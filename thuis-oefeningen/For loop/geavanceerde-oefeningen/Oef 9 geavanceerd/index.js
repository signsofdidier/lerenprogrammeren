/*
Controleer of een getal een priemgetal is*/


let number = parseInt(prompt("Voer een getal in:"));
let isPrime = true;

for (let i = 2; i < number; i++){
    if (number % i === 0){
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(number + " is een priemgetal.")
}else {
    console.log(" is geen priemgetal.")
}

// Te moeilijk