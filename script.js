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
