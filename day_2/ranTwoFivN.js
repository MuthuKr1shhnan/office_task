let fiveN = [];
function twoDigit() {
  for (let i = 1; i <= 5; i++) {
    let tens = Math.ceil(Math.random() * 9) * 10;
    let twoDigit = tens + Math.ceil(Math.random() * 9);
    fiveN.push(twoDigit);
  }
  return fiveN;
}
console.log(twoDigit());
