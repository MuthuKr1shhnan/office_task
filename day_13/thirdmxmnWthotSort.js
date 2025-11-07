let a = [5, 1, 2, 6, 8, 7];
let firstMax = a[0];
let secondMax = a[1];
let thirdMax = a[2];
let firstMin = a[0];
let secondMin = a[1];
let thirdMin = a[2];

for (let i = 0; i < a.length; i++) {
  //for max
  if (a[i] > firstMax) {
    thirdMax = secondMax;
    secondMax = firstMax;
    firstMax = a[i];
  } else if (a[i] > secondMax && a[i] < firstMax) {
    thirdMax = secondMax;
    secondMax = a[i];
  } else if (a[i] > thirdMax && a[i] < secondMax) {
    thirdMax = a[i];
  }

  //for min
  if (a[i] < firstMax) {
    thirdMax = secondMax;
    secondMax = firstMax;
    firstMax = a[i];
  } else if (a[i] < secondMax && a[i] > firstMax) {
    thirdMax = secondMax;
    secondMax = a[i];
  } else if (a[i] < thirdMax && a[i] > secondMax) {
    thirdMax = a[i];
  }
}
console.log("3rd Maximum:", thirdMax);
console.log("3rd Minimum:", thirdMin);
