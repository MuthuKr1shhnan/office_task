let a = [5, 1, 2, 6, 8];
let mx = a[0];
let mn = a[0];
for (let i = 1; i < a.length; i++) {
  if (mx < a[i]) {
    mx = a[i];
  }
  if (mn > a[i]) {
    mn = a[i];
  }
}
console.log(mx);
console.log(mn);
