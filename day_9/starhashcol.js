let n = 5;
let breaker = 3;
for (let i = 1; i <= n; i++) {
  if (i < breaker) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    console.log();
  } else if (i < breaker + 2) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("#");
    }

    console.log();
  } else {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    breaker += 4;
    console.log()
  }
}
