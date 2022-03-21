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
//some querySelectors  - main containers or usable elements
var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#btn-start");
var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#quiz");
//some getElementById - question + answers for quiz
var quizQuestions = document.getElementById("question");
var quizOption_1 = document.getElementById("A1");
var quizOption_2 = document.getElementById("A2");
var quizOption_3 = document.getElementById("A3");
var quizOption_4 = document.getElementById("A4");
quizEl.setAttribute("style", "display: none;");
//keeping score variable
var keepScore = 0;
//gotAnswer?
var gotAnswer = false;
//time deduction is going to be -5 seconds
var timeDeduct = 5;
//timer will start at 75 seconds
var timeIntervalStart = 75;
timeEl.innerHTML = "Time: " + timeIntervalStart;
var quiz_level = 0;

var nextQuestion = function () {
  console.log("quiz_level = " + quiz_level);
  if (quiz_level >= questions.length) {
    //end of questions array -> show highscore page
    console.log("End of questions! --> show highscore page!");
    //checking to see that quiz_level at max questions.length
    console.log(quiz_level, questions.length);
    //show score
    console.log("here's your score: " + keepScore);
    //reset timeinterval and make app reuseable
    // {code}
  } else {
    console.log(questions[quiz_level].question + "next questions!");
    quizQuestions.innerHTML = questions[quiz_level].question;
    quizOption_1.innerHTML = questions[quiz_level].options[0];
    quizOption_2.innerHTML = questions[quiz_level].options[1];
    quizOption_3.innerHTML = questions[quiz_level].options[2];
    quizOption_4.innerHTML = questions[quiz_level].options[3];
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

    if (timeIntervalStart <= 0) {
      clearInterval(timeInterval);
      console.log("Time's up, here's your score: " + keepScore);
    }
  }, 1000);

  quizQuestions.innerHTML = questions[quiz_level].question;
  quizOption_1.innerHTML = questions[quiz_level].options[0];
  quizOption_2.innerHTML = questions[quiz_level].options[1];
  quizOption_3.innerHTML = questions[quiz_level].options[2];
  quizOption_4.innerHTML = questions[quiz_level].options[3];
};

//add event listener for start button
startButton.addEventListener("click", startQuiz);
quizEl.addEventListener("click", function (event) {
  //if user clicks this element and it matches answer for quiz iteration
  if (event.target.innerHTML === questions[quiz_level].answer) {
    //add score!
    keepScore++;
    //display correct!
    console.log("true");
    //increase quiz_level iteration
    quiz_level += 1;
    //change style under box
    //call function for next quiz!

    nextQuestion();
  } else {
    console.log("false");
    timeIntervalStart -= timeDeduct;
    quiz_level += 1;
    nextQuestion();
  }
});
