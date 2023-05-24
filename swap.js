let first = 10;
let second = 50;
console.log(first, second)
// ans :- 10 50

// approach :- 1
const temp = first;
first = second;
second = temp;
console.log(first, second)
// ans :- 50 10


// approach :- 2
let first1 = 'mango';
let second2 = 'orange';

[first1, second2] = [second2, first1] 

console.log(first1, second2);
// ans :- orange mango


// approach :- 3
let x = 100;
let y = 300;

x = x + y; // {100 + 300 = 400}
y = x - y; // {400 - 300 = 100}
x = x - y; // {400 - 100 = 300}

console.log(x, y)
// ans :- 300 100
