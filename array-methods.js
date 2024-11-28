// dasgal= sondgoi toog hevle

// let ages = [22, 12, 54, 67, 88, 32, 36, 26, 39, 171, 57, 91];
// function findOddNumbers(input) {
//   let OddNumbers = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 == 1) {
//       OddNumbers.push(input[i]);
//     }
//   }
//   return OddNumbers;
// }
// let answer = findOddNumbers(ages);
// console.log(answer);

// tegsh toog hevle.
// let ages = [22, 12, 54, 67, 88, 32, 36, 26, 39, 171, 57, 91];
// function findEdenNumbers(input) {
//   let EdenNumbers = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 == 0) {
//       EdenNumbers.push(input[i]);
//     }
//   }
//   return EdenNumbers;
// }
// let answer = findEdenNumbers(ages);
// console.log(answer);

// max even toog hevle.

let ages = [22, 12, 54, 67, 88, 32, 36, 26, 39, 171, 57, 91];
function findMaxNum(arr) {
  let EdenMaxNum1 = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (EdenMaxNum1 < arr[i + 1]) {
      EdenMaxNum1 = arr[i + 1];

      arr[i] % 2 === 0;
    }
  }
  return EdenMaxNum1;
}
function findEdenNumbers(input) {
  let EdenNumbers = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      EdenNumbers.push(input[i]);
    }
  }
  return EdenNumbers;
}
let answer = findEdenNumbers(ages);
let MaxEden = findMaxNum(answer);
console.log(MaxEden);
