const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCounts = fruits.reduce((counter, fruit) => {
  if (fruit in counter) {
    counter[fruit]++;
  } else {
    counter[fruit] = 1;
  }
  return counter;
}, {});
console.log(fruitCounts); // { apple: 3, banana: 2, orange: 1 }