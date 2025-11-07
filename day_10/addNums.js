let a = [1, 6, 7, 4, 3, 8, 4];
let total = 0;
let avg = 0;
for (let i = 0; i < a.length; i += 2) {
  if (a[i + 1]) {
    total += a[i] + a[i + 1];
  } else {
    total += a[i];
  }
  avg = total;
}
console.log(total);
console.log(avg / a.length);
