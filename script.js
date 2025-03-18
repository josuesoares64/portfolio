const titulo = document.getElementById("titulo");
const textos = ["Desenvolvedor Fullstack", "Foco em Front-end"];
let index = 0;
let charIndex = 0;
let isDeleting = false;    
    
    document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.getElementById("toggleTheme");
        const body = document.body;

        if (localStorage.getItem("theme") === "light") {
            body.classList.add("light-mode");
            toggleButton.textContent = "☀️";
        }

        toggleButton.addEventListener("click", function () {
            body.classList.toggle("light-mode");

            if (body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
                toggleButton.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "dark");
                toggleButton.textContent = "🌙";
            }
        });
    });

// Muda titulo  
function typeEffect() {
    let currentText = textos[index];
    let displayedText = currentText.substring(0, charIndex);

    titulo.textContent = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            index = (index + 1) % textos.length;
        }
        setTimeout(typeEffect, 1500);
    }
}
typeEffect();
