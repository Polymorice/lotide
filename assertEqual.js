// console.assert will output 'Assertion failed', if boolean value = 0
// can be used for bug testing
// // FUNCTION IMPLEMENTATION
// const sum = function(a, b) {
//   return a + b;
// }

// // TEST CODE
// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!

// const sumBuggy = function(a, b) {
//   return a * b;
// }

// // TEST CODE
// console.assert(sumBuggy(1, 2) === 3); // fails, because bug!

// FUNCTION IMPLEMENTATION
// assertion test
// const assertEqual = function (actual, expected) {
//   console.assert(actual === expected);
// };

// // TEST CODE
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

// // template literal test
// let a = 2;
// let b = 'three';
// console.log(`${a} is not ${b}`);
