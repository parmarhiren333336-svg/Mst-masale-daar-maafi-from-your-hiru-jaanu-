/* ==========================
   OPERATION MANAO MAHI ❤️
   Part 1
========================== */

const loader = document.getElementById("loader");
const main = document.getElementById("main");

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const journey = document.getElementById("journey");

const message = `Hey Mahi ❤️

Aaj koi lambi speech nahi...

Bas ek chhota sa surprise hai.

Promise...
Sirf 2 minute lagenge. 🌸`;

let i = 0;

// Typing Effect
function typeWriter() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

// Loading Screen
window.onload = () => {

    let width = 0;
    const bar = document.querySelector(".loading");

    const timer = setInterval(() => {

        width++;
        bar.style.width = width + "%";

        if (width >= 100) {

            clearInterval(timer);

            loader.style.display = "none";
            main.classList.remove("hidden");

            typeWriter();
        }

    }, 25);

};

// Start Journey
startBtn.onclick = () => {

    document.querySelector(".hero").style.display = "none";
    journey.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

/* ==========================
   OPERATION MANAO MAHI ❤️
   Part 2
   (Continue...)
========================== */
/* ==========================
   OPERATION MANAO MAHI ❤️
   Part 2
========================== */

const giftBtn = document.getElementById("giftBtn");
const giftSection = document.getElementById("giftSection");

const openGift = document.getElementById("openGift");
const letterSection = document.getElementById("letterSection");

const nextBtn = document.getElementById("nextBtn");
const roseSection = document.getElementById("roseSection");

const smileBtn = document.getElementById("smileBtn");
const finalSection = document.getElementById("finalSection");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Journey → Gift
giftBtn.onclick = () => {
    journey.style.display = "none";
    giftSection.classList.remove("hidden");
};

// Gift → Letter
openGift.onclick = () => {
    giftSection.style.display = "none";
    letterSection.classList.remove("hidden");
};

// Letter → Rose
nextBtn.onclick = () => {
    letterSection.style.display = "none";
    roseSection.classList.remove("hidden");
};

// Rose → Final
smileBtn.onclick = () => {
    roseSection.style.display = "none";
    finalSection.classList.remove("hidden");

    if (typeof confetti === "function") {
        confetti({
            particleCount: 180,
            spread: 100,
            origin: { y: 0.6 }
        });
    }
};

// Smile Button
yesBtn.onclick = () => {
    yesBtn.innerHTML = "❤️ Thank You Mahi ❤️";
};
/* ==========================
   OPERATION MANAO MAHI ❤️
   Part 3
========================== */

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = "0.9";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 6s linear, top 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = window.innerHeight + "px";
        heart.style.transform = "rotate(360deg)";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6200);

}, 800);


// 😤 Still Angry Button (Unlimited Move)

function moveNoButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});


// Final Message
console.log("❤️ Website created by Hiru for Mahi ❤️");
