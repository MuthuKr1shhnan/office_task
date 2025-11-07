let a = [6, 5, 7, 2, 5];
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    let tem = 0;
    if (a[i < a[j]]) {
      tem = a[j];
      a[j] = a[i];
      a[i] = tem;
    }
  }
}
console.log(a);
