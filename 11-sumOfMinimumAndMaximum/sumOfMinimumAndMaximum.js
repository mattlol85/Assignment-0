
function sumOfMinimumAndMaximum(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  return min+max;
}
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;


/*
- For multiples of three, insert "Fizz" instead of the number into the output array
- For multiples of five, insert "Buzz" instead of the number into the output array
- For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
- For numbers which are neither a multiple of three nor a multiple of five, insert the number into the output array

*/