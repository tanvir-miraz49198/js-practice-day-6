// string include
const lyrics = 'amar sonar bangla ami tomai valobashi'

const doesExist = lyrics.includes('bangla');
console.log(doesExist)
// ans :- true 

const doesExist2 = lyrics.includes('Bangla');
console.log(doesExist2)
// ans :- false

const doesExist3 = lyrics.includes('bangladesh');
console.log(doesExist3)
// ans :- false


// index of
console.log(lyrics.indexOf('tomai'))
// ans :- 22


// start With
console.log(lyrics.startsWith('amar'))
// ans :- true


// start With
console.log(lyrics.startsWith('tomar'))
// ans :- false


// ends With
console.log(lyrics.endsWith('valobashi'))
// ans :- true


// ends With
console.log(lyrics.endsWith('ghrina'))
// ans :- false
