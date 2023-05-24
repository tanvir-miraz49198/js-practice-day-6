// math.pow
const result = Math.pow(3, 3);
  // (3*3*3 = 27)
console.log(result); // ans : - 27 

const result2 = Math.pow(4, 5); 
 //(4*4*4*4*4 = 1024)

console.log(result2); // ans : - 1024


// math.abs
const numb1 = 25;
const numb2 = 45;
const gap1 = numb1 - numb2;
console.log(gap1);
// ans :- -20
const gap2 = Math.abs(numb1 - numb2);
console.log(gap2)
// ans :- 20

if (gap2 < 5) {
  console.log("you guys are friends")
}else{
  console.log("you guys stay apart")
}
// you guys stay apart


// math.round
const number1 = 2.441516;
const fullNumber = Math.round(number1);
console.log(fullNumber); 
// ans :- 2

const number2 = 2.541516;
const fullNumber2 = Math.round(number2);
console.log(fullNumber2); 
// ans :- 3

// math.ceil
const number3 = 3.141516;
const fullNumber3 = Math.ceil(number3);
console.log(fullNumber3); 
// ans :- 4

// math.floor
const number4 = 6.941516;
const fullNumber4 = Math.floor(number4);
console.log(fullNumber4); 
// ans :- 6

// math.random
const number5 = [];
const fullNumber5 = Math.random(number5); 
// ans :- 0.2877271985070762   note :- {any output can be come}

console.log(fullNumber5); 
// ans :- 0.5040761229265991

const number6 = [];
const fullNumber6 = Math.random(number6)*100;
const roundAns = Math.round(fullNumber6);
console.log(roundAns);
 // ans :- 75  note :- {any output can be come between 1 to 100}

