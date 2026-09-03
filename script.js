/* =========================================================
   CODE BLASTER.exe
   Teachers' Day 2026
========================================================= */

// =========================
// BOOT SEQUENCE
// =========================

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");

const target = document.getElementById("target");
const bootScreen = document.getElementById("boot-screen");
const mainContent = document.getElementById("main-content");

const enterBtn = document.getElementById("enterBtn");


// Boot messages

setTimeout(() => {
    line1.textContent = "Loading knowledge........ ✓";
}, 700);

setTimeout(() => {
    line2.textContent = "Loading coding.......... ✓";
}, 1400);

setTimeout(() => {
    line3.textContent = "Loading inspiration.... ✓";
}, 2100);

setTimeout(() => {
    line4.textContent = "Loading memories....... ✓";
}, 2800);


// Progress bar

let currentProgress = 0;

const progressTimer = setInterval(() => {

    currentProgress += 2;

    progress.style.width = currentProgress + "%";
    percentage.textContent = currentProgress + "%";

    if (currentProgress >= 100) {

        clearInterval(progressTimer);

        setTimeout(() => {

            target.classList.remove("hidden");

        }, 500);
    }

}, 60);


// =========================
// ENTER EXPERIENCE
// =========================

enterBtn.addEventListener("click", () => {

    bootScreen.classList.add("hide");

    setTimeout(() => {

        mainContent.classList.add("visible");

        document.body.style.overflow = "auto";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

});


// =========================
// PERSONAL MESSAGE
// =========================

const messageText =
`Dear Sir,

Thank you for every explanation, every correction, every suggestion, and every time you encouraged us to keep learning.

You may teach us Computer Science, but the lessons that stay with us go far beyond the classroom.

You taught us that coding is not just about writing programs.

It is about thinking.
It is about solving problems.
It is about trying again when something doesn't work.

I am genuinely grateful to have you as one of my teachers.

Happy Teachers' Day, Sir.

— Mahalakshmi ❤️`;

const typingElement =
document.getElementById("typing-message");

let messageStarted = false;
let messageIndex = 0;


// Typing function

function typeMessage() {

    if (messageIndex < messageText.length) {

        typingElement.textContent +=
            messageText.charAt(messageIndex);

        messageIndex++;

        setTimeout(typeMessage, 25);

    }

}


// Start typing when message section appears

const messageSection =
document.querySelector(".message-section");

const messageObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !messageStarted) {

            messageStarted = true;

            typeMessage();
        }

    });

}, {
    threshold: 0.3
});

messageObserver.observe(messageSection);


// =========================
// OPEN MESSAGE BUTTON
// =========================

function showMessage() {

    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// SECRET BIRYANI.exe
// =========================

const secretBtn =
document.getElementById("secretBtn");

const secretMessage =
document.getElementById("secret-message");

secretBtn.addEventListener("click", () => {

    secretMessage.classList.toggle("show");

    if (secretMessage.classList.contains("show")) {

        secretBtn.innerHTML =
            '<i class="fa-solid fa-unlock"></i> CLASSIFIED FILE OPENED';

    } else {

        secretBtn.innerHTML =
            '<i class="fa-solid fa-lock"></i> ACCESS CLASSIFIED FILE';

    }

});


// =========================
// CONSOLE EASTER EGG
// =========================

console.log(`
╔══════════════════════════════════════╗
║          CODE BLASTER.exe            ║
╠══════════════════════════════════════╣
║                                      ║
║  Hello, curious developer. 👀        ║
║                                      ║
║  You found the console Easter egg.   ║
║                                      ║
║  Teacher detected:                   ║
║  PRUTHVIRAJ MUNDARGI                 ║
║                                      ║
║  Alias: CODE BLASTER ✨              ║
║                                      ║
║  Happy Teachers' Day! ❤️             ║
║                                      ║
╚══════════════════════════════════════╝
`);


// =========================
// KEYBOARD EASTER EGG
// =========================

let secretCode = "";

document.addEventListener("keydown", (event) => {

    secretCode += event.key.toLowerCase();

    if (secretCode.length > 20) {
        secretCode = secretCode.slice(-20);
    }

    if (secretCode.includes("biryani")) {

        alert(
            "🍛 BIRYANI.exe ACTIVATED!\n\n" +
            "Code Blaster's happiness level: ∞"
        );

        secretCode = "";
    }

});


// =========================
// PREVENT SCROLL DURING BOOT
// =========================

document.body.style.overflow = "hidden";
/* ================================
   SECRET CODE BLASTER
================================ */

let secretKeys = "";

document.addEventListener("keydown", function (event) {

    secretKeys += event.key.toLowerCase();

    if (secretKeys.length > 20) {
        secretKeys = secretKeys.slice(-20);
    }

    if (secretKeys.includes("codeblaster")) {
        document.getElementById("secretEgg").classList.add("active");
        secretKeys = "";
    }
});

function closeSecret() {
    document.getElementById("secretEgg").classList.remove("active");
}

function showBiryani() {

    const message = document.getElementById("biryaniMessage");

    message.innerHTML = `
        > BIRYANI.exe STARTING...<br>
        > ████████████████████ 100%<br><br>
        🍛 MISSION COMPLETE 🍛<br>
        <strong>CODE BLASTER DESERVES BIRYANI!</strong> ❤️
    `;
}
