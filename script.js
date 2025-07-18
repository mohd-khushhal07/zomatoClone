document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");

    input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 15px #ff3333";
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
    });

    const logo = document.querySelector("main section:first-child img");
    logo.style.opacity = 0;
    logo.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        logo.style.opacity = 1;
    }, 200);
});
