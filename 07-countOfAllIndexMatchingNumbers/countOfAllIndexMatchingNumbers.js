function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let counter = 0;
  for(let i = 0; i < nums.length; i++){
    if (i == nums[i])
      counter++;
  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;