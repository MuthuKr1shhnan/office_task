let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
for(let i = 0; i < days.length; i+=2){
    console.log(days[i])
    days[i+1] ? console.log(days[i+1]) : null
}
