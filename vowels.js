const isVowel = function(letter) {
  if (letter === 'a' || letter ===  'e' || letter ===  'i' || letter === 'o' || letter === 'u') {
    return true;
  } else {
    return false;
  }
};

let numberOfVowels = function(data) {
  let number = 0;
  for (let i = 0; i < data.length; i++) {
    if (isVowel(data[i])) {
      number++;
    }
  }
  return number;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));