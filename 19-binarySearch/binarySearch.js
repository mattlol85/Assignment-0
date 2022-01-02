class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if(nums.length <= 1){return false;}
    let middle = Math.floor(nums.length/2)
    //console.log(nums[middle], i)
    // Go to middle and check for match
    if(nums[middle] === target){return true}
    else if(nums[middle] < target){return this.binarySearch(nums.splice(middle,nums.length), target)}
    else if(nums[middle] > target){return this.binarySearch(nums.splice(0,middle), target)}
    else return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;