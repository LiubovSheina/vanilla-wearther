

let now = new Date();
let listDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let listMonth = [
  "Januar",
  "Februar",
  "March",
  "April",
  "May",
  "Juni",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let day = listDay[now.getDay()];
let month = listMonth[now.getMonth()];
let days = now.getDate();
let year = now.getFullYear();
let h2 = document.querySelector(".currently-date");
let hour = now.getHours();
let min = now.getMinutes();
h2.innerHTML = `${day} ${hour}:${min},<br/> ${month} ${days}, ${year}.`;
console.log(month);
console.log(now.getMonth());
