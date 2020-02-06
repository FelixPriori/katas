const cleanText = function(text) {

  const search = /%20/gi;
  text = text.replace(search, ' ');

  if (text.indexOf('&') === -1) {

    return text.split('=');

  } else {

    text = text.split('&');
    let array = [];
  
    for (let i = 0; i < text.length; i++) {
      array.push(text[i].split('='));
    }

    return array;

  }
};

const urlDecode = function(text) {

  let output = {};
  let cleanedText = cleanText(text);

  if (cleanedText[0].constructor === Array) {

    for (let i = 0; i < cleanedText.length; i++) {
      output[cleanedText[i][0]] = cleanedText[i][1];
    }

    return output;

  } else {

    output[cleanedText[0]] = cleanedText[1];
    return output;
    
  }
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);