// dasgal-1
let ages = [10, 20, 30, 40, 50, 10];
let names = ["boldo", "dorjo", "dondog", "bataa", "boogii", "haagii"];

//sum of ages

// function findSumOfAges(ages) {
//   let sum = 0;
//   for (let i = 0; i < ages.length; i++) {
//     sum = sum + ages[i];
//   }
//   return sum;
// }
// let answer = findSumOfAges([10, 20, 30, 40, 50, 10]);
// console.log(answer);

//Average ages-ol.

// function findAverageOfAges(ages) {
//   let sum = 0;
//   for (let i = 0; i < ages.length; i++) {
//     sum = sum + ages[i];
//     m = sum / ages.length;
//   }
//   console.log(m);

// }

// findAverageOfAges([10, 20, 30, 40, 50, 1]);

//dasgal-2

// let numbers = [12, 3, 123, 460, 1, 25, 12, 51, 26, 1, 333];

// function findMin(arr) {
//   let minNum = arr[0];
//   for (let i = 0; i <arr.length - 1; i++) {
//     if (minNum > arr[i + 1]) {
//       minNum = arr[i + 1];
//     }
//   }
//   return minNum;
// }
// let answer = findMin(numbers);
// console.log(answer);

// dasgal-3 Array dotorh sondgoi min-g ol.

// let numbers = [12, 3, 123, 460, 5, 25, 12, 51, 26, 9, 333];

// function OddMinNum(arr) {
//   let OddMinNum1 = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (OddMinNum1 > arr[i + 1]) {
//       OddMinNum1 = arr[i + 1];

//       arr[i] % 2 ==1;
//     }
//   }
//   return OddMinNum1;
// }
// let answer = OddMinNum(numbers);
// console.log(answer);

//Array dotroos MaxEden numberiig ol/

let numbers = [12, 3, 123, 460, 5, 25, 12, 51, 26, 9, 333];

function EdenMaxNum(arr) {
  let EdenMaxNum1 = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (EdenMaxNum1 < arr[i + 1]) {
      EdenMaxNum1 = arr[i + 1];

      arr[i] % 2 === 0;
    }
  }
  return EdenMaxNum1;
}
let answer = EdenMaxNum(numbers);
console.log(answer);
