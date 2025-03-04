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
