function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1)
    throw "Error not good thing"

  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(i == j){break}
      //console.log(nums[j]+"  "+nums[i])

      if(nums[i]+ nums[j] == target){return true;}
    }
  }

  return false;
}
//pairSum([1,2,3,4,5], 8);
// Do not edit this line;
module.exports = pairSum;