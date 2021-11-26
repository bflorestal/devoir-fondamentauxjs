// Création d’un générateur de citations dans une Pop-up/Modal  
// (pop-up activante et désactivable au click)

// Récupération des éléments de la page
let popup = document.getElementById("modalContent");
let open = document.getElementById("genQuoteButton");
let close = document.getElementById("close");

// Initialisation des variables pour stocker contenir la citation
let quote = "";
let newQuote = [];

// Initialisation du tableau contenant les citations
const sunTzu = ["He will win who knows when to fight and when not to fight.", "In the midst of chaos, there is also opportunity.", "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.", "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.", "The greatest victory is that which requires no battle.", "Quickness is the essence of the war.", "Even the finest sword plunged into salt water will eventually rust.", "The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.", "There is no instance of a nation benefiting from prolonged warfare.", "There are not more than five musical notes, yet the combinations of these five give rise to more melodies than can ever be heard. There are not more than five primary colours, yet in combination they produce more hues than can ever been seen. There are not more than five cardinal tastes, yet combinations of them yield more flavours than can ever be tasted."]

// Fonctions d'ouverture et de fermeture du pop-up
function display() {
    // Change le display du pop-up de none à block
    popup.classList.add("displayblock");
    popup.classList.remove("displaynone");
}

function fermeture() {
    // Change le display du pop-up de block à none
    popup.classList.add("displaynone");
    popup.classList.remove("displayblock");
}

// Le pop-up s'ouvre et se ferme au clic sur un bouton
open.addEventListener("click", display);
close.addEventListener("click", fermeture);


// Fonction qui génère une citation
function generateQuote() {
    // Variable dans laquelle on va stocker la citation
    newQuote = [];

}