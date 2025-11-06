let n = 72;
let i = 2;
let result = [];
while (n > 1) {
  if (n % i === 0) {
    result.push(i);
    n = n / i;
  } else if (n % i !== 0) {
    i++;
  }
}
console.log(result)
