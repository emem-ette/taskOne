//my slack username
document.getElementById("slackUserName").innerHTML = "Elizabeth Udoessien";

//to put the weekdays in an array
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//to get the current date
const d = new Date();

// to change the output of getDay to words not digit
let day = weekday[d.getDay()];

// to display the output
document.getElementById("currentDayOfTheWeek").innerHTML = day;

// to display the UTC milliseconds from the current date 
let ms = d.getUTCMilliseconds();

// to set the output milliseconds in the HTML tag
document.getElementById("currentUTCTime").innerHTML = ms;

//to display my track
document.getElementById("myTrack").innerHTML = "Frontend Track"