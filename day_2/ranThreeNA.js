let fiveN = [];
let sum = 0
function avg() {
  for (let i = 1; i <= 5; i++) {
    let tens = Math.ceil(Math.random() * 9) * 100;
    let twoDigit = tens + Math.ceil(Math.random() * 100);
    fiveN.push(twoDigit);
    sum += fiveN[i-1]
  }
  console.log(sum/fiveN.length , fiveN) 
}
avg()