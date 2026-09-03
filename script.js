/* =================================
   CODE BLASTER.exe
   TEACHERS' DAY 2026
================================= */


/* =================================
   BOOT SCREEN
================================= */

const bootScreen = document.getElementById("boot-screen");
const mainContent = document.getElementById("main-content");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");
const target = document.getElementById("target");
const enterBtn = document.getElementById("enterBtn");


const bootLines = [
    [line1, "Loading knowledge........ ✓"],
    [line2, "Loading coding.......... ✓"],
    [line3, "Loading inspiration.... ✓"],
    [line4, "Loading memories....... ✓"]
];


let currentLine = 0;


function showBootLines() {

    if (currentLine < bootLines.length) {

        bootLines[currentLine][0].textContent =
            bootLines[currentLine][1];

        currentLine++;

        setTimeout(showBootLines, 500);

    } else {

        startProgress();

    }
}


function startProgress() {

    let value = 0;

    const timer = setInterval(() => {

        value += 2;

        progress.style.width = value + "%";
        percentage.textContent = value + "%";

        if (value >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                target.classList.remove("hidden");

            }, 500);
        }

    }, 35);
}


if (mainContent) {
    mainContent.style.display = "none";
}


showBootLines();


/* =================================
   ENTER WEBSITE
================================= */

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        bootScreen.style.opacity = "0";

        setTimeout(() => {

            bootScreen.style.display = "none";
            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 700);

    });

}


/* =================================
   OPEN MESSAGE
================================= */

function showMessage() {

    const messageSection =
        document.getElementById("message");

    if (messageSection) {

        messageSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =================================
   PERSONAL MESSAGE TYPING
================================= */

const messageElement =
    document.getElementById("typing-message");


const messageText =
`Sir,

Thank you for always supporting my projects,
clarifying my doubts and helping me whenever
I get stuck.

Every time I have a problem with my code,
your guidance helps me look at it differently.

You may not have handled a class for me,
but your support has taught me something
far more valuable — how to keep trying,
keep learning and keep building.

Thank you for being a mentor,
a guide and a constant source of encouragement.

Happy Teachers' Day, Sir. ❤️

— Mahalakshmi`;


let messageStarted = false;


function typeMessage() {

    if (!messageElement || messageStarted) {
        return;
    }

    messageStarted = true;

    let index = 0;

    function type() {

        if (index < messageText.length) {

            messageElement.textContent +=
                messageText.charAt(index);

            index++;

            setTimeout(type, 25);

        }

    }

    type();
}


/* Start typing when message section becomes visible */

const messageObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                typeMessage();

            }

        });

    }, {
        threshold: 0.3
    });


if (document.getElementById("message")) {

    messageObserver.observe(
        document.getElementById("message")
    );

}


/* =================================
   CLASSIFIED BIRYANI
================================= */

const secretBtn =
    document.getElementById("secretBtn");

const secretMessage =
    document.getElementById("secret-message");


if (secretBtn && secretMessage) {

    secretBtn.addEventListener("click", () => {

        secretMessage.classList.toggle("show");

        if (secretMessage.classList.contains("show")) {

            secretBtn.innerHTML =
                '<i class="fa-solid fa-unlock"></i> FILE OPENED';

        } else {

            secretBtn.innerHTML =
                '<i class="fa-solid fa-lock"></i> ACCESS CLASSIFIED FILE';

        }

    });

}


/* =================================
   HEADER SCROLL EFFECT
================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
/* =========================================
   CODE BLASTER — DEBUG MISSION
========================================= */

const debugQuestions = [

    {
        title: "LEVEL 1 — FIND THE BUG",
        code:
`let score = 100;
console.log(score);`,
        question: "What will this code print?",
        answers: [
            "100",
            "score",
            "undefined",
            "Error"
        ],
        correct: 0
    },

    {
        title: "LEVEL 2 — FIX THE CODE",
        code:
`let name = "Code Blaster";
console.log(name);`,
        question: "Which statement correctly prints the variable?",
        answers: [
            "console.log(name);",
            "Console.Log(name);",
            "print(name);",
            "echo name;"
        ],
        correct: 0
    },

    {
        title: "LEVEL 3 — SOLVE THE PROBLEM",
        code:
`function add(a, b) {
    return a + b;
}

add(10, 20);`,
        question: "What is the result?",
        answers: [
            "20",
            "30",
            "1020",
            "Error"
        ],
        correct: 1
    },

    {
        title: "LEVEL 4 — PROJECT RESCUE",
        code:
`for (let i = 0; i < 3; i++) {
    console.log(i);
}`,
        question: "How many times will the loop run?",
        answers: [
            "1 time",
            "2 times",
            "3 times",
            "Infinite times"
        ],
        correct: 2
    },

    {
        title: "FINAL BOSS — IMPOSSIBLE BUG",
        code:
`let x = 10;

if (x > 5) {
    console.log("BUG FIXED!");
}`,
        question: "Will the message 'BUG FIXED!' be printed?",
        answers: [
            "Yes",
            "No",
            "Only sometimes",
            "Syntax error"
        ],
        correct: 0
    }

];

let currentLevel = 0;
let gameScore = 0;
let gameLives = 3;
let questionLocked = false;


/* =========================================
   START GAME
========================================= */

function startGame() {

    currentLevel = 0;
    gameScore = 0;
    gameLives = 3;
    questionLocked = false;

    document.getElementById("game-start").classList.remove("active");
    document.getElementById("game-over").classList.remove("active");
    document.getElementById("game-complete").classList.remove("active");

    document.getElementById("game-play").classList.add("active");

    updateGameStatus();

    loadQuestion();

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    questionLocked = false;

    const question = debugQuestions[currentLevel];

    document.getElementById("level-number").textContent =
        currentLevel + 1;

    document.getElementById("question-title").textContent =
        question.title;

    document.getElementById("code-display").textContent =
        question.code;

    document.getElementById("question-text").textContent =
        question.question;

    document.getElementById("game-feedback").textContent = "";

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer-button";

        button.textContent =
            String.fromCharCode(65 + index) + ") " + answer;

        button.onclick = function () {
            checkAnswer(index, button);
        };

        answersContainer.appendChild(button);

    });

    updateProgress();

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (questionLocked) return;

    questionLocked = true;

    const question = debugQuestions[currentLevel];

    const allButtons =
        document.querySelectorAll(".answer-button");

    if (selectedIndex === question.correct) {

        selectedButton.classList.add("correct");

        gameScore += 100;

        document.getElementById("game-feedback").textContent =
            "> CORRECT ✓ BUG FIXED! +100";

        updateGameStatus();

        setTimeout(function () {

            currentLevel++;

            if (currentLevel >= debugQuestions.length) {

                showGameComplete();

            } else {

                loadQuestion();

            }

        }, 1200);

    } else {

        selectedButton.classList.add("wrong");

        gameLives--;

        document.getElementById("game-feedback").textContent =
            "> WRONG ✕ BUG SURVIVED!";

        updateGameStatus();

        const gameContainer =
            document.querySelector(".game-container");

        gameContainer.classList.add("game-shake");

        setTimeout(function () {
            gameContainer.classList.remove("game-shake");
        }, 400);

        if (gameLives <= 0) {

            setTimeout(function () {
                showGameOver();
            }, 900);

        } else {

            setTimeout(function () {

                questionLocked = false;

                selectedButton.classList.remove("wrong");

                document.getElementById("game-feedback").textContent =
                    "> TRY AGAIN...";

            }, 900);

        }

    }

}


/* =========================================
   UPDATE STATUS
========================================= */

function updateGameStatus() {

    document.getElementById("score").textContent =
        gameScore;

    document.getElementById("lives").textContent =
        "❤️".repeat(gameLives);

}


/* =========================================
   UPDATE PROGRESS BAR
========================================= */

function updateProgress() {

    const progress =
        ((currentLevel + 1) / debugQuestions.length) * 100;

    document.getElementById("game-progress-bar").style.width =
        progress + "%";

}


/* =========================================
   GAME OVER
========================================= */

function showGameOver() {

    document.getElementById("game-play").classList.remove("active");

    document.getElementById("game-over").classList.add("active");

    document.getElementById("game-over-score").textContent =
        gameScore;

}


/* =========================================
   GAME COMPLETE
========================================= */

function showGameComplete() {

    document.getElementById("game-play").classList.remove("active");

    document.getElementById("game-complete").classList.add("active");

}


/* =========================================
   PLAY AGAIN
========================================= */

function restartGame() {

    document.getElementById("game-complete").classList.remove("active");

    startGame();

}
