//module operator
// huvaah tooni uldegdeliig ilerhiileh
// let x = 792;
// let y = 7;
// let answer = x % y;
// console.log(answer);

// //ene too 7d huvaagddag eseh?
// if (too1 % 7 == 0) {
//   console.log("7d huvaagdana");
// } else {
//   console.log("7d huvaagdahgui");
// }

//too 7d huvaagdana, 11t huvaagdana
//too 7d huvaagdana, 11t huvaagdahgui
//too 7d huvaagdahgui, 11t huvaagdana
//too 7d huvaagdahgui, 11t huvaagdahgui
let too2 = 49;

if (too2 % 7 == 0) {
  if (too2 % 11 == 0) {
    console.log("7d huvaagdana, 11t huvaagdana");
  } else {
    console.log("7d huvaagdana, 11t huvaagdahgui");
  }
} else {
  if (too2 % 11 == 0) {
    console.log("7d huvaagdahgui, 11t huvaagdana");
  } else {
    console.log("7d huvaagdahgui,11t huvaagdahgui");
  }
}
