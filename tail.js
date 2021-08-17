const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

function tail(array) {
  // use .slice
  // return (arrayTail = array.slice(1));
  // create new array
  let arrayTail = [];
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
}

// test
console.log(tail([1, 2, 3]));

// test array comparison
console.log([1, 2, 3] === [1, 2, 3]);
console.log([1, 2, 3] == [1, 2, 3]);

// test asserEqual with arrays
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']);
