let n = 123456
let prod = 1
while(n > 0){
  prod *= n%100
  n = (n - n%100)/100
}
console.log(prod)