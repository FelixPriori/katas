const removeSpace = function(text) {
  return text.split(' ').join('');
};

const squareCode = function(message) {

  message = removeSpace(message);
  const lineLength = Math.ceil(Math.sqrt(message.length));
  let encoded = '';

  for (let i = 0; i < lineLength; i++) {
    for (let j = i; j < message.length; j += lineLength) {
      encoded += message[j];
    }
    encoded += ' ';
  }

  return encoded;
  
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));