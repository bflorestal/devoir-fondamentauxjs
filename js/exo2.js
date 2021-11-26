// Création d’un convertisseur qui transforme les degrés Celsius en Fahrenheit et inverseme

// Récupération des éléments de la page
let celInput = document.getElementById("celInput");
let fahInput = document.getElementById("fahInput");
let convertButton = document.getElementById("convertButton");

// Initialisation
let temperatureCel = "";
let temperatureFah = "";

// Fonction calcul pour avoir Celsius | (x °F − 32) * 5/9 = y °C
function convToCel(temp) {
    temperatureFah = ((temp - 32) * 5/9);
    return temperatureFah;
}
// Fonction calcul pour avoir Fahrenheit | (x °C * 9/5) + 32 = y °F
function convToFah(temp) {
    temperatureCel = ((temp * 9/5) + 32);
    return temperatureCel;
}

// Fonction conversion
function convert() {
    // On met les données dans les variables
    temperatureCel = celInput.value;
    temperatureFah = fahInput.value;
    console.log(`temp cel : ${temperatureCel} et temp fah : ${temperatureFah}`)
    // Si fah vide, prendre cel et convertir, sinon prendre fah et convertir
    if (temperatureCel) {
        fahInput.value = convToFah(temperatureCel);
    } else if (temperatureFah) {
        celInput.value = convToCel(temperatureFah);
    }
}