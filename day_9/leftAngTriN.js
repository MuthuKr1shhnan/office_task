let n = 4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j <= n - i) {
      process.stdout.write(" ");
    } else {
      process.stdout.write(((j - (n - i)) * 2).toString());
    }
  }
  console.log();
}
