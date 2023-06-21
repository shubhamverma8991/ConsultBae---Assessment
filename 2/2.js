/*
p +1 
m -1 
s n*n
o output in array
other skip
*/

function customLogic(String) {
  let output = [];
  let value = 0;

  for (let i = 0; i < String.length; i++) {
    let char = String.charAt(i);

    if (char === "p") {
      value++;
    } else if (char === "m") {
      value--;
    } else if (char === "s") {
      value *= value;
    } else if (char === "o") {
      output.push(value);
    }
  }

  return output;
}

let result = customLogic("ppppsmoso");
console.log(result);
