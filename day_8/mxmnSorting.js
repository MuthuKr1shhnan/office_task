let a = [3, 9, 8, 1, 2];
let min = 0;
let max = 0;

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    let tem = 0;
    if (a[i] > a[j]) {
      tem = a[j];
      a[j] = a[i];
      a[i] = tem;
    }
  }
  min = a[0];
  max = a[a.length - 1];
}
console.log(a);
console.log(min);
console.log(max);
