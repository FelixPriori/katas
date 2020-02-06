const urlEncode = function(text) {
  const encoding = '%20';
  let encoded = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      encoded += encoding;
    } else {
      encoded += text[i];
    }
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));