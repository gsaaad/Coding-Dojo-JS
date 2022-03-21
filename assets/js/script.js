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

var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#btn-start");
var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#quiz");
var quizQuestions = document.getElementById("question");
var quizOption_1 = document.getElementById("A1");
var quizOption_2 = document.getElementById("A2");
var quizOption_3 = document.getElementById("A3");
var quizOption_4 = document.getElementById("A4");
quizEl.setAttribute("style", "display: none;");
//keeping score variable
var keepScore = 0;
//time deduction is going to be -5 seconds
var timeDeduct = 5;
//timer will start at 75 seconds
var timeIntervalStart = 75;
timeEl.innerHTML = "Time: " + timeIntervalStart;

//LoopingQuiz Function
var LoopingQuiz = function (questions) {
  for (var i = 0; i < questions.length; i++) {
    console.log(i);
    quizQuestions.innerHTML = questions[i].question;

    console.log(questions[i].options[0]);
    console.log(questions[i].options[1]);
    console.log(questions[i].options[2]);
    console.log(questions[i].options[3]);
  }
};

//startQuiz function
var startQuiz = function () {
  console.log("Clicked! Start Quiz");
  //defining the countdown function
  var timeInterval = setInterval(() => {
    timeEl.innerHTML = "Time: " + timeIntervalStart--;
    //function for quiz
    introEl.setAttribute("style", "display:none;");
    quizEl.setAttribute("style", "display:block;");

    if (timeIntervalStart === -1) {
      clearInterval(timeInterval);
      console.log("Time's up, here's your score: " + keepScore);
    }
  }, 1000);
  LoopingQuiz(questions);
};

//add event listener for start button
startButton.addEventListener("click", startQuiz);
