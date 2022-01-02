function isPalindrome(word) {
  // Insert code here;
  if(word.length % 2 == 0){
    let firstHalf = word.slice(0, (word.length/2))
    let secondHalf = word.slice((word.length/2),word.length)
    //console.log(firstHalf + " " + secondHalf)

    if(firstHalf === secondHalf.split("").reverse().join(""))
      return true;

  }else if (word.length % 2 != 0){
    let firstHalf = word.slice(0, (word.length/2));
    let secondHalf = word.slice((word.length/2)+1, word.length)
    if(firstHalf === secondHalf.split("").reverse().join(""))
    return true;
  }

  return false;
}
isPalindrome("racecar");
// Do not edit this line;
module.exports = isPalindrome;