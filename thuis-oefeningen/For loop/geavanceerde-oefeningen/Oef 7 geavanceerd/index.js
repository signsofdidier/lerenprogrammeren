/*
Print de Fibonacci-reeks*/

 let a = 1, b = 1;
 console.log(a);
 console.log(b);
 for (let i = 3; i <= 10, i++){
   let volgende = a + b;
   console.log(volgende);
   a = b;
   b = volgende;
 }

// Te moeilijk