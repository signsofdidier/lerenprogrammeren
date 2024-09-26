// let, var, const
// let blockscope, var universeel, const is een vaste waarde

//DATATYPES
let number = 5; //de ouput zal een NUMBER zijn
let tekst = "Didier";
let keuze = 1; // 1 = true, 0 = false // BOOLEAN!!

let strNum = "123";
strNum = parseInt(strNum); //kommagetallen = parseFloat

let strNum1 = "123";
strNum1 = parseInt(strNum1);

var resultaat = strNum+strNum1;
console.log(typeof(resultaat));

let person = {
    name: "Jane",
    age:30,
    isStudent: false,
    haarkleur: "bruin"
}

console.log(typeof(person));
console.log(person.name);

var familieNaam = "Vanassche";
var geboorteJaar = 1991;
var huidigJaar = 2024;

var resultaat = huidigJaar-geboorteJaar;

console.log(familieNaam);
console.log(resultaat);

//het resultaat van Vanassche is 33 jaar.

// het resultaat van familieNaam = 33 jaar.

// het resultaat van familieNaam is resultaat.

//ES5 notatie
console.log("het resultaat van " + familieNaam + " is ", resultaat);
//ES6 notatie
console.log(`het resultaat ${familieNaam} van is ${resultaat}`);

// OEFENING

var getal1 = 3;
var getal2 = 2;

console.log(`${getal1} + ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} * ${getal2} = ${getal1*getal2}`);
console.log(`${getal1} / ${getal2} = ${getal1/getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1-getal2}`);

// PROMT // zelfde oefening maar met prompt
// parseInt zet prompt om in numbers (getallen) ipv string (tekst)

var getal1 = parseInt (prompt ("voer je eerste getal in"));
var getal2 = parseInt (prompt ("voer je tweede getal in"));

console.log(`${getal1} + ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} * ${getal2} = ${getal1*getal2}`);
console.log(`${getal1} / ${getal2} = ${getal1/getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1-getal2}`);
console.log(`${getal1} % ${getal2} = ${getal1%getal2}`);

let getal5 = 5;
//getal5 = getal5 + 1; lange notatie
getal5+=1; // shorthand notatie

console.log(5 == "5");
console.log(5 === "5");