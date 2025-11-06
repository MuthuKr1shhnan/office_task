let n = 1234
let sum = 0
while(n > 0){
  sum += n%10
  n = (n - n%10)/10
}
console.log(sum)