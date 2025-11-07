let a = [3, 2, 5, 4];
let sum = 0;
for (let i = 0; i < a.length; i += 2) {
  if (a[i + 1]) {
    sum += a[i] + a[i + 1];
  } else {
    sum += a[i];
  }
}
console.log(sum)