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


/* =================================
   BOOT LINES
================================= */

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


/* =================================
   BOOT PROGRESS
================================= */

function startProgress() {

    let value = 0;

    const timer = setInterval(function () {

        value += 2;

        if (progress) {
            progress.style.width = value + "%";
        }

        if (percentage) {
            percentage.textContent = value + "%";
        }

        if (value >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                if (target) {
                    target.classList.remove("hidden");
                }

            }, 500);
        }

    }, 35);
}


/* =================================
   HIDE MAIN WEBSITE INITIALLY
================================= */

if (mainContent) {
    mainContent.style.display = "none";
}


/* =================================
   START BOOT
================================= */

showBootLines();


/* =================================
   ENTER WEBSITE
================================= */

if (enterBtn) {

    enterBtn.addEventListener("click", function () {

        if (bootScreen) {
            bootScreen.style.opacity = "0";
        }

        setTimeout(function () {

            if (bootScreen) {
                bootScreen.style.display = "none";
            }

            if (mainContent) {
                mainContent.style.display = "block";
            }

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
   PERSONAL MESSAGE
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


/* =================================
   TYPE MESSAGE
================================= */

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


/* =================================
   MESSAGE OBSERVER
================================= */

if ("IntersectionObserver" in window) {

    const messageObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    typeMessage();
                }

            });

        }, {
            threshold: 0.3
        });

    const messageSection =
        document.getElementById("message");

    if (messageSection) {
        messageObserver.observe(messageSection);
    }

}


/* =================================
   CLASSIFIED BIRYANI
================================= */

const secretBtn =
    document.getElementById("secretBtn");

const secretMessage =
    document.getElementById("secret-message");

if (secretBtn && secretMessage) {

    secretBtn.addEventListener("click", function () {

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

window.addEventListener("scroll", function () {

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

        question:
        "Which statement correctly prints the variable?",

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

        question:
        "How many times will the loop run?",

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

        question:
        "Will the message 'BUG FIXED!' be printed?",

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

    const gameStart =
        document.getElementById("game-start");

    const gamePlay =
        document.getElementById("game-play");

    const gameOver =
        document.getElementById("game-over");

    const gameComplete =
        document.getElementById("game-complete");

    if (gameStart) {
        gameStart.classList.remove("active");
    }

    if (gameOver) {
        gameOver.classList.remove("active");
    }

    if (gameComplete) {
        gameComplete.classList.remove("active");
    }

    if (gamePlay) {
        gamePlay.classList.add("active");
    }

    updateGameStatus();
    loadQuestion();

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    const question =
        debugQuestions[currentLevel];

    if (!question) {
        return;
    }

    questionLocked = false;

    const levelNumber =
        document.getElementById("level-number");

    const questionTitle =
        document.getElementById("question-title");

    const codeDisplay =
        document.getElementById("code-display");

    const questionText =
        document.getElementById("question-text");

    const feedback =
        document.getElementById("game-feedback");

    const answersContainer =
        document.getElementById("answers");

    if (levelNumber) {
        levelNumber.textContent =
            currentLevel + 1;
    }

    if (questionTitle) {
        questionTitle.textContent =
            question.title;
    }

    if (codeDisplay) {
        codeDisplay.textContent =
            question.code;
    }

    if (questionText) {
        questionText.textContent =
            question.question;
    }

    if (feedback) {
        feedback.textContent = "";
    }

    if (!answersContainer) {
        return;
    }

    answersContainer.innerHTML = "";


    question.answers.forEach(function (answer, index) {

        const button =
            document.createElement("button");

        button.className =
            "answer-button";

        button.textContent =
            String.fromCharCode(65 + index)
            + ") "
            + answer;

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        answersContainer.appendChild(button);

    });


    updateProgress();

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (questionLocked) {
        return;
    }

    const question =
        debugQuestions[currentLevel];

    if (!question) {
        return;
    }


    /* CORRECT */

    if (selectedIndex === question.correct) {

        questionLocked = true;

        selectedButton.classList.add("correct");

        gameScore += 100;

        const feedback =
            document.getElementById("game-feedback");

        if (feedback) {

            feedback.textContent =
                "> CORRECT ✓ BUG FIXED! +100";

        }

        updateGameStatus();


        setTimeout(function () {

            currentLevel++;

            if (currentLevel >= debugQuestions.length) {

                showGameComplete();

            } else {

                loadQuestion();

            }

        }, 1000);

    }


    /* WRONG */

    else {

        selectedButton.classList.add("wrong");

        gameLives--;

        const feedback =
            document.getElementById("game-feedback");

        if (feedback) {

            feedback.textContent =
                "> WRONG ✕ BUG SURVIVED!";

        }

        updateGameStatus();


        const gameContainer =
            document.querySelector(".game-container");

        if (gameContainer) {

            gameContainer.classList.add("game-shake");

            setTimeout(function () {

                gameContainer.classList.remove(
                    "game-shake"
                );

            }, 400);

        }


        if (gameLives <= 0) {

            questionLocked = true;

            setTimeout(function () {

                showGameOver();

            }, 800);

        }

        else {

            setTimeout(function () {

                selectedButton.classList.remove("wrong");

                if (feedback) {

                    feedback.textContent =
                        "> TRY AGAIN...";

                }

            }, 800);

        }

    }

}


/* =========================================
   UPDATE GAME STATUS
========================================= */

function updateGameStatus() {

    const scoreElement =
        document.getElementById("score");

    const livesElement =
        document.getElementById("lives");

    if (scoreElement) {

        scoreElement.textContent =
            gameScore;

    }

    if (livesElement) {

        livesElement.textContent =
            "❤️".repeat(gameLives);

    }

}


/* =========================================
   UPDATE PROGRESS
========================================= */

function updateProgress() {

    const progressBar =
        document.getElementById(
            "game-progress-bar"
        );

    if (!progressBar) {
        return;
    }

    const progressValue =
        ((currentLevel + 1) /
        debugQuestions.length) * 100;

    progressBar.style.width =
        progressValue + "%";

}


/* =========================================
   GAME OVER
========================================= */

function showGameOver() {

    const gamePlay =
        document.getElementById("game-play");

    const gameOver =
        document.getElementById("game-over");

    const gameOverScore =
        document.getElementById("game-over-score");

    if (gamePlay) {

        gamePlay.classList.remove("active");

    }

    if (gameOver) {

        gameOver.classList.add("active");

    }

    if (gameOverScore) {

        gameOverScore.textContent =
            gameScore;

    }

}


/* =========================================
   GAME COMPLETE
========================================= */

function showGameComplete() {

    const gamePlay =
        document.getElementById("game-play");

    const gameComplete =
        document.getElementById("game-complete");

    if (gamePlay) {

        gamePlay.classList.remove("active");

    }

    if (gameComplete) {

        gameComplete.classList.add("active");

    }

}


/* =========================================
   RESTART GAME
========================================= */

function restartGame() {

    const gameComplete =
        document.getElementById("game-complete");

    const gameOver =
        document.getElementById("game-over");

    if (gameComplete) {

        gameComplete.classList.remove("active");

    }

    if (gameOver) {

        gameOver.classList.remove("active");

    }

    startGame();

}
