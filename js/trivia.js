var quotes = ['Failure is not the opposite of success, it\'s a part of success', 'Every system is perfectly designed to get the results it gets', 'Every accomplishment starts with the decision to try', 'Its never too late to be what you might have been', 'We are what we repeatedly do'];
// set up quote of the day to create a random number between one and four and pull that out of the array 
function quoteOTD() {
  var quoteToday = Math.floor(Math.random() * 5);
  return quotes[quoteToday];  
}

//add a function that converts the first letter of their name to uppercase
function redoName(name) {
  var firstLetter = name.charAt(0);
  var firstLetter = firstLetter.toUpperCase()
  pigName = name.slice(1, name.length);
  redo = firstLetter + pigName;
  return redo;   
}

//set up email validation
function validEmail(email) {
  var emailExp = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
  var valid = email.match(emailExp);
  return valid;
}

//function to split email username
function emailSplit(email) {
  var emailArray = email.split("@");
  var emailFirstPart = emailArray[0];
  var newUsername = emailFirstPart.toUpperCase();
  return newUsername;
}

// set up question and matching answer arrays
var julieQuest = ['the color of the sky?', 'the domestic animal that has 4 legs and rhymes with fog?', 'the season comes after fall and before spring?'];
var julieAns = ['blue', 'dog', 'winter'];

// quiz function displays questions and gives the user 2 attempts to get it right - then returns a score
function julieQuiz() {
  // initialize points
  var points = 0;
  //use a for loop to loop through each question
  for (i = 0; i <= 2; i++) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with question
      let ansEntered = prompt("What is " + julieQuest[i] + " (text only, no numbers)");
      let ans = ansEntered.toLowerCase();
      // see if the answer matches the answer array
      if (ans == julieAns[i]) {
        // if correct, add 3 points to points for only one guess, add 2 points for two guesses, and add 1 point if they took 3 tries, alert user and set attempts to 0
        points = points + attempts;
        alert("Correct!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect");
        attempts = attempts - 1;
      } // end if
    } // end while
  } // end for
  // return the points variable
  return points;
} // end julieQuiz function

function scoreBoard(points){
  var percentage = (points / 9).toFixed(2);
  return percentage;
}



/* creates a date object with the current date */
let date = new Date();
let readableDate = date.toGMTString();
let month = date.getMonth();
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let wordMonth = months[month];

/* creates a date object with the specified date. */
let newDate = new Date(year, month, day, hour, minute);
let days = date.getDay();

weekDays[day];
let myBirthday = new Date(1983, 8, 21);
let mySeconds = myBirthday.getTime();
let birthday = myBirthday.getDay();

//set up time of day greeting function
function returnGreeting() {
  let greetHour = date.getHours();
  switch (greetHour) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return "Good Morning, ";
    case 12:
    case 13:
    case 14:
    case 15:
      return "Good Afternoon, ";
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      return "Good Evening, ";
    default:
      return "Good Night, ";
  }
}
