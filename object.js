// dasgal= Adults-g ol.

// let students = [
//   { name: "dorjo", age: 15, gender: "male" },
//   { name: "dulmaa", age: 30, gender: "female" },
//   { name: "dondog", age: 5, gender: "male" },
//   { name: "bat", age: 50, gender: "male" },
//   { name: "tsetsge", age: 10, gender: "female" },
// ];
// function findAdults(input) {
//   let adults = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].age >= 18) {
//       adults.push(input[i]);
//     }
//   }
//   return adults;
// }
// let result = findAdults(students);
// console.log(result);

// dasgal= adults gender male-iig ol.

let students = [
  { name: "dorjo", age: 15, gender: "male" },
  { name: "dulmaa", age: 30, gender: "female" },
  { name: "dondog", age: 5, gender: "male" },
  { name: "bat", age: 50, gender: "male" },
  { name: "tsetsge", age: 10, gender: "female" },
];
function findAdults(input) {
  let adults = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].age >= 18) {
      adults.push(input[i]);
    }
  }
  return adults;
}
function findGenderMale(input) {
  let genderMale = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender == "male") {
      genderMale.push(input[i]);
    }
  }
  return genderMale;
}
let result = findGenderMale(students);
console.log(result);
