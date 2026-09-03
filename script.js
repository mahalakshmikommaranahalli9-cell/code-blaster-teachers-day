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
