// approach 1
let a = 10;
let b = 20;
let c = 18;

if (a > b && a > c) {
  console.log("A is BIG")
}else if(b > a && b > c){
  console.log("B is Big")
}else{
  console.log('C is BIG')
}

// ans :- B is Big


// approach 2

console.log(Math.max(a,b,c))
// ans :- 20


// approach 3

function findBig(X, Y, Z){
  return Math.max(X,Y,Z)
}

const bigNumber = findBig(1050, 3000, 8070);
console.log(bigNumber)
// ans :- 8070



// approach 4
// less number 
function findLss(X, Y, Z){
  return Math.min(X,Y,Z)
}

const lessNumber = findLss(1050, 3000, 8070);
console.log(lessNumber)
// ans :- 1050



