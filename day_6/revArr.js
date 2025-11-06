let a = [1, 2, 3, 4, 5];
let n = 5;
for (let i = n - 1; i >= 0; i -= 2) {
  console.log(a[i]);
  i ? console.log(a[i - 1]) : null;
}
