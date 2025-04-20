const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "In golf, what name is given to a hole score of two under par?",
    answers: [
      { text: "Birdie", correct: false },
      { text: "Bogey", correct: false },
      { text: "Eagle", correct: true },
      { text: "Albatross", correct: false },
    ],
  },
  {
    question: "Who won the 2015 Formula 1 World Championship?",
    answers: [
      { text: "Lewis Hamilto", correct: true },
      { text: "Nico Rosberg", correct: false },
      { text: "Sebastian Vettel", correct: false },
      { text: "Jenson Button", correct: false },
    ],
  },
  {
    question: "How many points did LeBron James score in his first NBA game?",
    answers: [
      { text: "19", correct: true },
      { text: "69", correct: false },
      { text: "41", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "Who won the 2016 Formula 1 World Drivers Championship?",
    answers: [
      { text: "Lewis Hamilton", correct: false },
      { text: "Nico Rosberg", correct: true },
      { text: "Max Verstappen", correct: false },
      { text: "Kimi Raikkonen", correct: false },
    ],
  },
  {
    question: "What team won the 2016 MLS Cup?",
    answers: [
      { text: "Colorado Rapids", correct: false },
      { text: "Toronto FC", correct: false },
      { text: "Montreal Impact", correct: false },
      { text: "Seattle Sounders", correct: true },
    ],
  },
  {
    question: "Which team won the 2015-16 English Premier League?",
    answers: [
      { text: "Liverpool", correct: false },
      { text: "Manchester United", correct: false },
      { text: "Cheslea", correct: false },
      { text: "Leicester City", correct: true },
    ],
  },
  {
    question: "Which country will host the 2022 FIFA World Cup?",
    answers: [
      { text: "Qatar", correct: true },
      { text: "USA", correct: false },
      { text: "Japan", correct: false },
      { text: "Switzerland", correct: false },
    ],
  },
  {
    question: "When was the first official international game played?",
    answers: [
      { text: "1873", correct: false },
      { text: "1862", correct: false },
      { text: "1872", correct: true },
      { text: "1863", correct: false },
    ],
  },
  {
    question: "When was the FC Schalke 04 founded?",
    answers: [
      { text: "1909", correct: false },
      { text: "1904", correct: true },
      { text: "2008", correct: false },
      { text: "1999", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  console.log(e);

  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} Out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block ";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
