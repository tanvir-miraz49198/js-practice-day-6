function maxInArray(numbers){
    let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    
    const element = numbers[i];
    // console.log(element)
    if (element > largest) {
      largest = element
    }
    
  }
  return largest
  }
  
  const highest = [125, 145, 188, 169, 192, 187, 175]
  const tallest = maxInArray(highest)
  console.log(tallest)
  // ans :- 192
  
  