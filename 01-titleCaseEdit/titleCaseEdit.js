function titleCaseEdit(title) {
  let titleArray = title.toLowerCase().split(' ');
  let curWord = ' ';
  let newTitle = "";
  let newTitleArray = [];

  for(let i = 0; i < titleArray.length; i++){
    // Grab Word
    curWord = titleArray[i]
    // Grab First Letter and add the rest of the sentence
    let capitalizedWord = curWord[0].toUpperCase() + curWord.slice(1);
    // Assemble new array
    newTitleArray[i] = capitalizedWord;
  }
  let finished = newTitleArray.join(" ")
  return finished;
}

titleCaseEdit("Testing one two three.");
// Do not edit this line;
module.exports = titleCaseEdit;