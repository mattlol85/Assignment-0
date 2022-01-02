function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let sum = args[0]
  for(let i = 1; i < args.length; i++){
    sum *= args[i]
  }
  return sum;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;