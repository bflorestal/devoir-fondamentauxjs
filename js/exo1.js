// Création d’un générateur de mot de passe complexe
// (chiffres + alphabet en min + maj et caractères spéciaux)

// Récupération des éléments de la page
let pwGenOutput = document.getElementById("pwGenOutput");

// Initialisation des tableaux contenant tous les caractères
let allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let allLettersMin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let allLettersMaj = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let allSpecial = ["¢", "ß", "¥", "£", "™", "©", "®" ,"ª" ,"×", "÷", "±", "²", "³", "¼", "½", "¾", "µ", "¿", "¶", "·", "¸", "º", "°", "¯", "§", "!", "?", "&", "¤", "¦", "≠", "¬", "ˆ", "¨", "‰", "£", "-", "#", "~"];
// Initialisation des variables de stockage
let password = "";
let randomNumber = 0;
let randomLetterMin = "";
let randomLetterMaj = "";
let randomSpecial = "";
// Longueur du mot de passe
const pwLength = 3;

// Fonction génération de mot de passe
function generatePw() {
    // Pour stocker le nouveau mot de passe
    let newPassword = [];

    // On génère 3 fois un chiffre, une lettre min + maj et un caractère spécial à mettre dans le mot de passe
    for (i = 0; i < pwLength; i++) {
        randomNumber = allNumbers[Math.floor(Math.random() * allNumbers.length)];
        randomLetterMin = allLettersMin[Math.floor(Math.random() * allLettersMin.length)];
        randomLetterMaj = allLettersMaj[Math.floor(Math.random() * allLettersMaj.length)];
        randomSpecial = allSpecial[Math.floor(Math.random() * allSpecial.length)];
        // On met les 4 dans le tableau newPassword
        newPassword.push(randomNumber);
        newPassword.push(randomLetterMin);
        newPassword.push(randomLetterMaj);
        newPassword.push(randomSpecial);
    }
    // On transforme le contenu du tableau newPassword en chaîne de caractères
    password = newPassword.join('');

    // On met le mot de passe sur la page
    pwGenOutput.textContent = password;
}