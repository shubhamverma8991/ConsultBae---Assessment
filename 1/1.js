/*
Camel Case Function
 */

function camelCase(string, delimiter) {
  let words = string.split(delimiter);
  //   console.log("words");
  //   console.log("words " + words.length);
  let camelCaseWords = [];

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCaseWords.push(words[i]);
    } else {
      camelCaseWords.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
  }
  return camelCaseWords.join("");
}

console.log(camelCase("the-test-case", "-"));
console.log(camelCase("The_First_Word_Capital", "_"));
