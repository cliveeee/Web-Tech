document.addEventListener("DOMContentLoaded", function () {
    // Your existing code for fetching jokes
    const getJokesBtn = document.getElementById("getJokesBtn");
    const numberOfJokesInput = document.getElementById("numberOfJokes");
    const jokesDisplay = document.getElementById("jokesDisplay");
    const apiKey = 'BeloNZIWW2YihsrrI4KxDKmdP1JUHL8Qgc3Bg0q9';

    getJokesBtn.addEventListener("click", function () {
        const numberOfJokes = numberOfJokesInput.value;

        if (numberOfJokes >= 1 && numberOfJokes <= 30) {
            const apiUrl = `https://api.api-ninjas.com/v1/dadjokes?limit=${numberOfJokes}`;

            fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                }
            })
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.status);
                    }
                })
                .then(function (data) {
                    jokesDisplay.innerHTML = "";
                    data.forEach(function (joke) {
                        jokesDisplay.innerHTML += `<p>${joke.joke}</p>`;
                    });
                })
                .catch(function (error) {
                    console.error("Error:", error);
                    jokesDisplay.innerHTML = "An error occurred while fetching jokes.";
                });
        } else {
            jokesDisplay.innerHTML = "Please enter a number between 1 and 30.";
        }
    });

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
