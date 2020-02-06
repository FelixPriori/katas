const propertyIncrementer = function(objectName, propertyName) {
  if (objectName[propertyName] === undefined) {
    objectName[propertyName] = 0;
  }
  return objectName[propertyName]++;
};

let calculateChange = function(total, cash) {
  // Your code here
  let difference = cash - total;
  const change = {};
  while (difference) {
    if (difference >= 2000) {
      propertyIncrementer(change, 'twentyDollar');
      difference -= 2000;
    } else if (difference >= 1000 && difference < 2000) {
      propertyIncrementer(change, 'tenDollar');
      difference -= 1000;
    } else if (difference >= 500 && difference < 1000) {
      propertyIncrementer(change, 'fiveDollar');
      difference -= 500;
    } else if (difference >= 200 && difference < 500) {
      propertyIncrementer(change, 'twoDollar');
      difference -= 200;
    } else if (difference >= 100 && difference < 200) {
      propertyIncrementer(change, 'oneDollar');
      difference -= 100;
    } else if (difference >= 25 && difference < 100) {
      propertyIncrementer(change, 'quarter');
      difference -= 25;
    } else if (difference >= 10 && difference < 25) {
      propertyIncrementer(change, 'dime');
      difference -= 10;
    } else if (difference >= 5 && difference < 10) {
      propertyIncrementer(change, 'nickel');
      difference -= 5;
    } else if (difference >= 1 && difference < 5) {
      propertyIncrementer(change, 'penny');
      difference -= 1;
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));