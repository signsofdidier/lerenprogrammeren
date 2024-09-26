let leeftijd = parseInt(prompt("Wat is uw leeftijd?"));

if(leeftijd >= 18){

    console.log(`Je bent ${leeftijd} jaar oud. Je mag deelnemen`);
    let vakjes = parseInt(prompt("Aantal vakjes?"));
    if(vakjes === 12){
        console.log("12 bulletins kosten 20 euro")
    }
    if(vakjes === 2){
        console.log("2 bulletins kosten 4 euro")
    }
    if(vakjes === 1){
        console.log("1 bulletin kost 2 euro")
    }

}else {
    console.log("Om deel te nemen moet je 18 jaar oud zijn.")
}

