const questions = [
    {
        question: "What year was Barbie first introduced?",
        options: ["1959", "1960", "1958", "1957"],
        answer: 1,
    },
    {
        question: "What is Barbie’s full name?",
        options: [
            "Barbara Peters",
            "Barbara Millicent Roberts",
            "Barbie Roberts",
            "Millicent Roberts",
        ],
        answer: 2,
    },
    {
        question: "Who created Barbie?",
        options: ["Ruth Handler", "Mattel", "Hasbro", "Apple"],
        answer: 1,
    },
    {
        question: "Which toy company manufactures Barbie?",
        options: [
            "Mattel",
            "The London Toy Company",
            "Hamleys",
            "Beehive Toy Factory",
        ],
        answer: 1,
    },
    {
        question: "What was the first Barbie doll wearing?",
        options: [
            "A black-and-white striped swimsuit",
            "A black-and-white striped Dress",
        ],
        answer: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;
let username = "";

function login() {
    const input = document.getElementById("username");
    if (input.value.trim() !== "") {
        username = input.value.trim();
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("quizPage").classList.remove("hidden");
        document.getElementById(
            "greeting"
        ).textContent = `Hello, ${username}! Good luck with the quiz.`;
        showQuestion();
    } else {
        alert("Please enter a username to start the quiz.");
    }
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("resultPage").classList.remove("hidden");
    document.getElementById(
        "score"
    ).textContent = `${username}, you scored ${score} out of ${questions.length}!`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("resultPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("username").value = "";
}
