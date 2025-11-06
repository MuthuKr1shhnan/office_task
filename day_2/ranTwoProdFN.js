let fiveN = [];
let prod = 1
function product() {
  for (let i = 0; i < 5; i++) {
    let tens = Math.ceil(Math.random() * 9) * 10;
    let twoDigit = tens + Math.ceil(Math.random() * 9);
    fiveN.push(twoDigit);
    prod *= fiveN[i]
  }
  console.log(prod, fiveN) 
}
product()