const button = document.querySelector('.switchModeButton');

button.addEventListener('click', () => {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
        localStorage.setItem("data-theme", "light");
        document.documentElement.classList.remove('dark-theme');
        console.log("Mahan - Light Mode")
    } else if (theme === null || theme === "light") {
        localStorage.setItem("data-theme", "dark");
        document.documentElement.classList.toggle('dark-theme');
        console.log("Mahan - Dark Mode")
    }
});

$(document).ready(function () {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
        document.documentElement.classList.toggle('dark-theme');
        console.log("Mahan - Dark Mode")
    } else if (theme === null || theme === "light") {
        document.documentElement.classList.remove('dark-theme');
        console.log("Mahan - Light Mode")
    }
});

document.addEventListener("keydown", function (zEvent) {
    let theme = localStorage.getItem("data-theme");
    if (zEvent.shiftKey && zEvent.key === "T") {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            if (theme === "dark") {
                console.log("Mahan - Dark Mode")
            } else {
                localStorage.setItem("data-theme", "dark");
                document.documentElement.classList.toggle('dark-theme');
                console.log("Mahan - Dark Mode")
            }
        } else if (!darkThemeMq.matches) {
            if (theme === "light") {
                console.log("site zaten light")
            } else {
                localStorage.setItem("data-theme", "light");
                document.documentElement.classList.remove('dark-theme');
            }
        }
    }
});