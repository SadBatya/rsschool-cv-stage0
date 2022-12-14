let switchmode = document.getElementById("switchmode");

switchmode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute ("href") == "/CSS/style.css"){
        theme.href = "/CSS/darkmode.css";
    } else {
        theme.href = "/CSS/style.css";
    }
}