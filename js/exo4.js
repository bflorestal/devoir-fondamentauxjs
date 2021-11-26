// Création d’un DarkMode, qui varie en mode jour ou nuit l’ensemble du style sur votre page

// Récupération des éléments de la page
let body = document.querySelector("body");
let themeButton = document.getElementById("themeButton");

// Fonction
function switchTheme() {
    // Si les textes sont blancs, mettre thème jour, sinon mettre thème nuit
    if (body.style.color == "white") {
        body.style.color = "black";
        body.style.backgroundColor = "white";
    } else {
        body.style.color = "white";
        body.style.backgroundColor = "black";
    }
}