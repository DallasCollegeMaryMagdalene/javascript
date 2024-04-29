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
      let ans = prompt("What is " + julieQuest[i]);
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