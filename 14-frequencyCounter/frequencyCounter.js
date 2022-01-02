function frequencyCounter(word) {
  // Insert code here;
  //const map = new Map();
  const obj = new Object();
  let wordArr = word.split('');

  for(let i = 0; i < wordArr.length; i++){
  if(obj[wordArr[i]] !=  undefined){
    // If letter exists, add one to counter
    obj[wordArr[i]] += 1;
  }else{
    obj[wordArr[i]] = 1;
  }
}
  return obj;
}
// Do not edit this line;
module.exports = frequencyCounter;