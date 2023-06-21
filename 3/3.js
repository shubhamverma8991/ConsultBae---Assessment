// a to n

function countExtraCharacters(inputString) {
  const characters = new Set("abcdefghijklmn");
  let extraCount = 0;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i].toLowerCase();
    if (!characters.has(char)) {
      extraCount++;
    }
  }
  return extraCount;
}

const extraCount1 = countExtraCharacters("aaabdbnhaikjjm");
console.log(extraCount1);

const extraCount2 = countExtraCharacters("abaxbdbbyyhwawiwjjjwem");
console.log(extraCount2);
