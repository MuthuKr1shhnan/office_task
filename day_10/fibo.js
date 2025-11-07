let n = 10;
let result = 0;
let tracerA = 0;
let tracerB = 0;
for (let i = 1; i <= n; i++) {
  console.log(result);
  if (result === 0) {
    tracerA = result;
    result++;
    tracerB = result;
  } else {
    result = tracerB + tracerA;
    tracerA = tracerB;
    tracerB = result;
  }
}
