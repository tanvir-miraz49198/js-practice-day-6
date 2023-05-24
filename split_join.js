let lyrics2 = 'amar collage er nam notunhat public collage. ami amar collage k valobashi'

let parts = lyrics2.split(' ')
console.log(parts)
/* ans :- 
[
  'amar',     'collage',
  'er',       'nam',
  'notunhat', 'public',
  'collage'
] */

let char = lyrics2.split('')
console.log(char)
/* ans :-
[
  'a', 'm', 'a', 'r', ' ', 'c', 'o', 'l', 'l', 'a',
  'g', 'e', ' ', 'e', 'r', ' ', 'n', 'a', 'm', ' ',
  'n', 'o', 't', 'u', 'n', 'h', 'a', 't', ' ', 'p',
  'u', 'b', 'l', 'i', 'c', ' ', 'c', 'o', 'l', 'l',
  'a', 'g', 'e', '.', ' ', 'a', 'm', 'i', ' ', 'a',
  'm', 'a', 'r', ' ', 'c', 'o', 'l', 'l', 'a', 'g',
  'e', ' ', 'k', ' ', 'v', 'a', 'l', 'o', 'b', 'a',
  's', 'h', 'i'
]
*/ 

let sentences = lyrics2.split('.');
console.log(sentences)
/* ans :-
[
  'amar collage er nam notunhat public collage',
  ' ami amar collage k valobashi'
]
*/ 


let lyrics3 = 'abcdefghijklmnopqrstuv'
let slices = lyrics3.slice(5, 8)
console.log(slices)


let lyrics4 = [
    'My name is tanvir hassan',
    'I am 18 years old',
    'My home town is jashore'
];

let joining = lyrics4.join('. ')
console.log(joining)
// ans :- My name is tanvir hassan. I am 18 years old. My home town is jashore

