function countOfAllBooleans(arr) {
  // Insert code here;
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if((arr[i] === true) || (arr[i] === false)){
      count++;
  }
  }
  return count;
}
//countOfAllBooleans([true, false, true, false, true, 7]);
// Do not edit this line;
module.exports = countOfAllBooleans;