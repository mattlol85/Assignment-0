function fizzBuzz(start, end) {
  // Insert code here;
  let outputArr = []
  let numItems = 0;
  for(let i = start; i <= end; i ++){
    // Multiple of 5 and 3
    if((i % 3 == 0) && (i % 5 == 0)){
    outputArr[numItems] = "FizzBuzz"
    }else if((i % 3 === 0)){
      outputArr[numItems] = "Fizz"
    }else if((i % 5 === 0)){
    outputArr[numItems] = "Buzz" 
    }else if ((i % 3 != 0) && (i % 5 != 0)){
      outputArr[numItems] = i;
    }
    // Increment new arr
    numItems++;
  }
  return outputArr;
}

// Do not edit this line;
module.exports = fizzBuzz;

/*

- For multiples of three, insert "Fizz" instead of the number into the output array
- For multiples of five, insert "Buzz" instead of the number into the output array
- For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
- For numbers which are neither a multiple of three nor a multiple of five, insert the number into the output array

*/