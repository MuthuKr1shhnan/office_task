let fiveN = [];
let sm = 0
function sum() {
  for (let i = 5; i > 0; i--) {
    let tens = Math.ceil(Math.random() * 9) * 10;
    let twoDigit = tens + Math.ceil(Math.random() * 9);
    fiveN.push(twoDigit);
    sm += fiveN[fiveN.length-1]
  }
  console.log(sm, fiveN) 
}
sum()