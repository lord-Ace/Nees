document.addEventListener("DOMContentLoaded", function () {
    var currrenttime = new Date();
    var hours = currrenttime.getHours().toString().padStart(2, "0");
    var minutes = currrenttime.getMinutes().toString().padStart(2, "0");
    var timeFormat = hours + ":" + minutes;
    document.getElementById("clock").innerHTML = timeFormat;
    const currentYear = document.getElementById("year");
    setInterval(currrenttime, 1000);
    currentYear.textContent = new Date().getFullYear();
    const buttons = document.querySelectorAll(".nav");
    const tabs = document.querySelectorAll(".main");
    
    const themes = document.getElementById("state");
    window.onload = function () {
      document.querySelectorAll(".active-btn").forEach(btn => document.getElementById("dropdown-label").textContent = btn.textContent)
        const currentTheme = localStorage.getItem("savedTheme");
        if (currentTheme === "true") {
            themes.checked = true;
            document
                .querySelectorAll("body")
                .forEach(sections => sections.classList.add("dark"));
            document
                .querySelectorAll(".content")
                .forEach(content => content.classList.add("drk"));
        } else if (currentTheme === "false") {
            themes.checked = false;
            document
                .querySelectorAll("body")
                .forEach(sections => sections.classList.remove("dark"));
            document
                .querySelectorAll(".content")
                .forEach(content => content.classList.remove("drk"));
        }
    };
    themes.addEventListener("input", function () {
        if (this.checked) {
            document
                .querySelectorAll("body")
                .forEach(sections => sections.classList.add("dark"));
            document
                .querySelectorAll(".content")
                .forEach(content => content.classList.add("drk"));
        } else {
            document
                .querySelectorAll("body")
                .forEach(sections => sections.classList.remove("dark"));
            document
                .querySelectorAll(".content")
                .forEach(content => content.classList.remove("drk"));
        }
        localStorage.setItem("savedTheme", themes.checked ? "true" : "false");
    });
    function activateTab(index) {
        buttons.forEach(btn => btn.classList.remove("active-btn"));
        tabs.forEach(tb => tb.classList.remove("active-tab"));
        buttons[index].classList.add("active-btn");
        tabs[index].classList.add("active-tab");
    }
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            activateTab(index);
            document.getElementById("dropdown-label").textContent = this.textContent
        });
    });
});
