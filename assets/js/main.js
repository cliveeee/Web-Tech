document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector(".nav-menu");
    const projectUrls = [
        "https://github.com/cliveeee/FinalApp",
        "https://github.com/cliveeee/civ-ipriot-proj-carpark",
        "https://github.com/cliveeee/Web-Dev-Phase-1",
    ];

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // A click event listener to each project card
    document.querySelectorAll(".project-card").forEach((card, index) => {
        card.addEventListener("click", () => {
            window.location.href = projectUrls[index];
        });
    });
});