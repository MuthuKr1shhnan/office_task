let n = 7;
let breaker = 3;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j < breaker) {
      process.stdout.write("*");
    } else if (j < breaker + 2) {
      process.stdout.write("#");
    } else {
      breaker += 4;
      process.stdout.write("*");
    }
  }
  breaker = 3;
  console.log();
}
