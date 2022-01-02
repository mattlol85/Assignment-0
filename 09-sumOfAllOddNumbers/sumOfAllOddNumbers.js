function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let counter = 0;
  for (let i = 0; i < nums.length; i ++){
    // Check if even, if so, add to sum
    if(nums[i]%2 != 0){
      counter++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;