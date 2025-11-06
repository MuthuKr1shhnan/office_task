let n = 1234
let prod = 1
while(n > 0){
  prod *= n%10
  n = (n - n%10)/10
}
console.log(prod)