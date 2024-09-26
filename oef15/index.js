//Oefeningen decimale getallen 0 tot 99//
//00,01,...

let = output = "";

for(let i= 0;i<=99;i++){
    if(i<=9){
        /*console.log(`0${i},`);*/
        output = output + `0${i},`;
    }else if(i<99){
        /*console.log(`${i},`);*/
        output = output + `${i},`;
    }else {
        /*console.log(`${i},`);*/
        output = output + `${i}`;
    }
}

console.log(output);