let a = ["a", "a", "c", "d", "c", "a", "b"];
for (let i = 0; i < a.length; i++) {
  let count = 1;
  if (a[i]) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        count++;
        a[j] = null;
      }
    }
    console.log(`${a[i]} is ${count} ${count > 1 ? "times" : "time"}`);
  }
}
