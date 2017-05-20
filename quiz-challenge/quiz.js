// Use two-dimensional array to keep questions & answer
// Use loop to cycle through questions and compare user answer to correct answer
// When loop is done, know how many were answered correctly

// Basic function to add html to body
function print(message) {
  document.getElementById('output').innerHTML = message;
}

// Setup the variables needed before the loop
var quizQuestions = [
  ["What is 1 + 1?", "2"],
  ["What is 2 + 3?", "5"],
  ["What is 8 % 3?", "2"]
];

var correctAnswers = 0;
var correctQs = "<h2>You got these questions correct:</h2><ol>";
var wrongQs = "<h2>You got these questions wrong:</h2><ol>";


// A loop to handle to logic of asking questions & comparing to answer
for (var i = 0; i <= quizQuestions.length; i++) {
  var correctStatement = "You got " + correctAnswers + " question(s) right!";
  if (i === quizQuestions.length) {
    correctQs += "</ol>";
    wrongQs += "</ol>";
    break;
  }
    var userAnswer = prompt(quizQuestions[i][0]);
  if (userAnswer === quizQuestions[i][1]) {
    correctAnswers += 1;
    correctQs += "<li>" + quizQuestions[i][0] + "</li>";
  } else {
    wrongQs += "<li>" + quizQuestions[i][0] + "</li>";
  }
}

// Add final results to page
print(correctStatement + correctQs + wrongQs);