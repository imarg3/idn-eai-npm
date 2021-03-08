const validateHindiWord = (word) => {
    var numberOfHindiCharacters = 128;
    var unicodeShift = 0x0900;
    var hindiAlphabet = [];
    for (let i = 0; i < numberOfHindiCharacters; i++) {
      hindiAlphabet.push("\\u0" + (unicodeShift + i).toString(16));
    }
    // console.log(hindiAlphabet);
    // regex_exp = "(?:^|\\s)[" + hindiAlphabet.join("") + "]+?(?:\\s|$)";
    regex_exp = "(?:^)[" + hindiAlphabet.join("") + "\\s]+$";
    var regex = new RegExp(regex_exp);
  
    // console.log(hindiAlphabet.length);
  
    if (word.match(regex)) return true;
    return false;
  };
  
  module.exports = validateHindiWord;
  