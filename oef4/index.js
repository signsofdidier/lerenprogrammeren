
let leeftijd = parseInt(prompt("Voer je leeftijd in:"));
//parseInt omdat het cijfers moeten zijn en geen string


if(leeftijd >= 18){
    console.log("Je bent een volwassene");
} else if(leeftijd >= 10){
    console.log("Je bent een tiener");
} else{
    console.log("kind");
}

// bij het kind is da de enige mogelijke optie da overblijft dus moet je geen = of >< gebruiken

