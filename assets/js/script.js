//main array of objects for the questions, options, and answers
var questions = [
  //switch to options[i] if its easier?
  {
    question: "Commonly used data types do NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed in:",
    options: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
    answer: "Parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store: ",
    options: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables",
    options: [
      "Commas: ,",
      "Curly Brackets: {}",
      "Quotes: ''",
      "Parenthesis: ()",
    ],
    answer: "Quotes: ''",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    options: ["Javascript", "Terminal Bash", "For loops", "console.log()"],
    answer: "console.log()",
  },
];
//some querySelectors  - main containers or usable bigger elements
var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#btn-start");
var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#quiz");
var allDoneEl = document.querySelector("#all-done");
var enterScoreEl = document.querySelector("#enterScore");
var scoreContainer = document.querySelector("#score-list");
//some getElementById - question + answers for quiz + score
var quizQuestions = document.getElementById("question");
var quizOption_1 = document.getElementById("A1");
var quizOption_2 = document.getElementById("A2");
var quizOption_3 = document.getElementById("A3");
var quizOption_4 = document.getElementById("A4");
var showScore = document.getElementById("score");
var userInitials = document.getElementById("userInitials");
//Display none for not currently useable pages/components
quizEl.setAttribute("style", "display: none;");
allDoneEl.setAttribute("style", "display:none;");
//keeping score variable
var keepScore = 0;
//time deduction is going to be -5 seconds
var timeDeduct = 5;
//timer will start at 75 seconds
var timeIntervalStart = 2;
//start time and initial 75 on the clock!
timeEl.innerHTML = "Time: " + timeIntervalStart;
//quiz level to itterate through quiz question
var quiz_level = 0;

var nextQuestion = function () {
  // function for next question, iterate through
  console.log("this is next question " + quiz_level);
  quizQuestions.innerHTML = questions[quiz_level].question;
  quizOption_1.innerHTML = questions[quiz_level].options[0];
  quizOption_2.innerHTML = questions[quiz_level].options[1];
  quizOption_3.innerHTML = questions[quiz_level].options[2];
  quizOption_4.innerHTML = questions[quiz_level].options[3];
  quiz_level += 1;
};

//startQuiz function
var startQuiz = function () {
  console.log("Clicked! Start Quiz!");
  //defining the countdown function
  var timeInterval = setInterval(() => {
    //interval start!
    timeEl.innerHTML = "Time: " + timeIntervalStart--;
    //display configuration
    introEl.setAttribute("style", "display:none;");
    quizEl.setAttribute("style", "display:block;");
    allDoneEl.setAttribute("style", "display:none;");
    //updating score
    keepScore = timeIntervalStart;
    //if time is less negative
    if (timeIntervalStart <= -1) {
      clearInterval(timeInterval);
      console.log("Time's up, here's your score: " + (keepScore + 1));
      //end of questions array -> show highscore page
      console.log("End of questions! --> show highscore page!");
      keepScore = timeIntervalStart + 1;
      clearInterval(timeIntervalStart);
      //checking to see that quiz_level at max questions.length
      console.log(quiz_level, questions.length);
      //show score
      quizEl.setAttribute("style", "display:none;");
      allDoneEl.setAttribute("style", "display:block;");
      console.log(keepScore);
      showScore.innerHTML = "Your score is:" + keepScore;
    } else if (quiz_level >= questions.length) {
      keepScore = timeIntervalStart;
      clearInterval(timeInterval);
    }
  }, 1000);
  nextQuestion();
};

//add event listener for start button
startButton.addEventListener("click", startQuiz);
quizEl.addEventListener("click", function (event) {
  //if user clicks this element and it matches answer for quiz iteration
  if (quiz_level >= questions.length) {
    quizEl.setAttribute("style", "display:none;");
    allDoneEl.setAttribute("style", "display:block;");
    showScore.innerHTML = "Your score is:" + (keepScore + 1);
  } else if (event.target.innerHTML === questions[quiz_level].answer) {
    console.log(quiz_level, questions.length);
    //update score
    keepScore = timeIntervalStart;
    //display correct! console.log
    console.log("true");
    //next question
    nextQuestion();

    // todo change style under box
  } else {
    console.log("false");
    timeIntervalStart -= timeDeduct;
    console.log(quiz_level, questions.length);
    console.log(timeIntervalStart);
    keepScore = timeIntervalStart;
    // todo change style under box
    nextQuestion();
  }
});

enterScoreEl.addEventListener("click", function (event) {
  userInitials.addEventListener("change", function (event) {
    var savedNamed = event.target.value;
    console.log(savedNamed);
    localStorage.setItem(savedNamed, keepScore);
  });
  if (event.target.id === "btn-submit") {
    window.location = "../Highscore.html";
    var newScore = 55;
    scoreContainer.appendChild(newScore);
  }
});
