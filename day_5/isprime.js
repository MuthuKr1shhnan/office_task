function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2 || n === 3 || n === 7 || n === 11) {
    return true;
  }
  if (
    n % 2 === 0 ||
    n % 3 === 0 ||
    n % 5 === 0 ||
    n % 7 === 0 ||
    n % 11 === 0
  ) {
    return false;
  }
  for (let i = 13; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(167));
