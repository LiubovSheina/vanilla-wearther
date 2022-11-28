/* let cities = [
  {city : 'paris',
    temp: 20,
    humility: 20,
  },
  {city : 'kyiv',
    temp: 10,
    humility: 10,
  },
  {city : 'london',
    temp: 10,
    humility: 90,
  },
  {city : 'lisobon',
    temp: 30,
    humility: 40,
  }
];
let answer = prompt("Enter city");
let p = false;
for(let i=0;i < cities.length; i++){
 
        if (answer.toLowerCase() === cities[i].city) {
          alert(`It is currently ${cities[i].temp}°C in ${cities[i].city.toUpperCase()} with a humidity of ${cities[i].humility}%`);
       p = true;
        };
      
      };
if(p === false){
        alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${answer.toLowerCase()}`);
      };*/

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

