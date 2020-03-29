const notCapWord = [
  "the",
  "a",
  "an",
  "but",
  "of",
  "and",
  "for",
  "at",
  "by",
  "from"
];

class Formatter {
  static capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  static sanitize(s) {
    return s.replace(/[^A-Za-z-'\s]/gi, "");
  }
  static titleize(s) {
    const newSentence = [];
    const wordArr = s.split(" ");
    wordArr.forEach(word => {
      debugger;
      if (!notCapWord.includes(word.toLowerCase()) || wordArr[0] === word)
        newSentence.push(this.capitalize(word));
      else newSentence.push(word);
    });
    return newSentence.join(" ");
  }
}
