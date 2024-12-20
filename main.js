document.addEventListener("DOMContentLoaded", () => {
    // Initialize Typed.js
    new Typed(".text", {
        strings: ["College student", "Computer Science"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });

    // Smooth Scrolling for Buttons
    document.querySelectorAll(".btn-box").forEach((button) => {
        // Exclude buttons with external links (e.g., resume link)
        if (!button.hasAttribute("target")) {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = button.getAttribute("href");
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        }
    });
});
