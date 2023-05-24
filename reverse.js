function reverseString(stringText) {
    for(let i = stringText.length-1; i >= 0; i--){
        let element = stringText[i];
        console.log(element)
        
    }
   
  }
  
  
  
  // reverse word
  function reverseWord(str){
  const word = str.split(' ');
  console.log(word)
  // ans :- [ 'i', 'am', 'a', 'good', 'boy' ]
  let finalResult = [];
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    
    finalResult.push(element)
  }
  const reversed = finalResult.join(' ');
  return reversed
  }
  
  
  
  
  
  let text = 'i am a good boy'
  reverseString(text)
  
  const reversed = reverseWord(text);
  console.log(reversed)
  // ans :- y o b   d o o g   a   m a   i
  
  /* ans :-
  y
  o
  b
  
  d
  o
  o
  g
  
  a
  
  m
  a
  
  i
  */ 
  