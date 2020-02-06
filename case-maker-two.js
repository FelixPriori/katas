// thisIsAString
const camelCase = function(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
};

// ThisIsAString
const pascalCase = function(input) {
  let output = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
};

// this_is_a_string
const snakeCase = function(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      output += '_';
    } else {
      output += input[i];
    }
  }
  return output;
};

// this-is-a-string
const kebabCase = function(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      output += '-';
    } else {
      output += input[i];
    }
  }
  return output;
};

// This Is A String
const titleCase = function(input) {
  let output = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      output += input[i];
      i++;
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
};

// check if the letter is a vowel
const isVowel = function(letter) {
  if (letter === 'a' || letter ===  'e' || letter ===  'i' || letter === 'o' || letter === 'u') {
    return true;
  } else {
    return false;
  }
};

// thIs Is A strIng
const vowelCase = function(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (isVowel(input[i])) {
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
};

// THiS iS a STRiNG
const consonantCase = function(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (!isVowel(input[i])) {
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
};

const decideCasePriority = function(caseNames) {
  let sortedNames = [];
  for (let i = 0; i < caseNames.length; i++) {
    if (caseNames[i] === 'camel') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'pascal') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'snake') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'kebab') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'title') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'vowel') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'consonant') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'upper') {
      sortedNames.push(caseNames[i]);
    } else if (caseNames[i] === 'lower') {
      sortedNames.push(caseNames[i]);
    }
  }
  return sortedNames;
};

// this builds the string depending on the case chosen.
const build = function(input, caseNames) {
  let output = '';
  if (caseNames === 'camel') {
    output = camelCase(input);
  } else if (caseNames === 'pascal') {
    output = pascalCase(input);
  } else if (caseNames === 'snake') {
    output = snakeCase(input);
  } else if (caseNames === 'kebab') {
    output = kebabCase(input);
  } else if (caseNames === 'title') {
    output = titleCase(input);
  } else if (caseNames === 'vowel') {
    output = vowelCase(input);
  } else if (caseNames === 'consonant') {
    output = consonantCase(input);
  } else if (caseNames === 'upper') {
    output = input.toUpperCase();
  } else if (caseNames === 'lower') {
    output = input.toLowerCase();
  }
  return output;
};

//this puts all the code together to return the final output.
const makeCase = function(input, caseNames) {
  let output = '';
  if (caseNames.constructor === Array) {
    let sortedNames = decideCasePriority(caseNames);
    for (let i = 0; i < sortedNames.length; i++) {
      output = build(input, sortedNames[i]);
      input = output;
    }
  } else {
    output = build(input, caseNames);
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));