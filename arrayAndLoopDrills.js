'use strict';

function max(numbers){
  try{
    if(!Array.isArray(numbers) || numbers.length <= 0)
      throw 'Check array';
      let maxVal = numbers[0];
      let counter = 0;
      while(counter <= numbers.length){
        if(maxVal < numbers[counter]){
          maxVal = numbers[counter];
        }
        counter++;      
      } 
      return maxVal; 
  }catch(err){
    console.error(err);
  }   
}

let arrOfNum = [2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];
let arrOfZeros = [0,0,0];
let arrEmpty = [];
let stringTest = 'suman';
console.log(max(arrOfNum));
console.log(max(arrOfZeros));
console.log(max(arrEmpty));
console.log(max(stringTest));
