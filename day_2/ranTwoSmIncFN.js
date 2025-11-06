let fiveN = [];
let sm = 0
function sum() {
  for (let i = 1; i <= 5; i++) {
    let tens = Math.ceil(Math.random() * 9) * 10;
    let twoDigit = tens + Math.ceil(Math.random() * 9);
    fiveN.push(twoDigit);
    sm += fiveN[i-1]
  }
  console.log(sm, fiveN) 
}
sum()