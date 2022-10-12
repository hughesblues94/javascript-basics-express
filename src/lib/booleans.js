const { boolean } = require("yargs");

function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !a && !b;
};

function one(a, b) {
  if (a && b) {
    return false;
  } else if (!a && b) {
    return true; 
  } else if (!a && !b) {
    return false;
  } else if (a && !b) {
    return true;
  }
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a < b || a === b;
};

function isOdd(a) {
  return a % 2 == 1;  
};

function isEven(a) {
  return !isOdd(a);
};

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0;
};

function startsWith(char, string) {
  return char === string[0];
};

function containsVowels(string) {
  const pattern = /[aeiouAEIOU]/gm;
  return pattern.test(string);
};

function isLowerCase(string) {
  const pattern = /[A-Z]/g;
  return !pattern.test(string);
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};