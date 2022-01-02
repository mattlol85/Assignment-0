function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let bigSet = new Set();

  for(let i = 0; i < args.length; i++){
    bigSet.add(args[i])
   // bigSet.
  }
  return bigSet;
}
setUnionOfAnyAmountOfSets(new Set(1), new Set(2));
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;