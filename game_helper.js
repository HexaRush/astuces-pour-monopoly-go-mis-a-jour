// game_helper.js
// Script de support technique pour Monopoly Go

console.log("Initialisation de l'Assistant Monopoly Go...");

const tokens = ["voiture", "chien", "chapeau"];
const phases = ["Début", "Tour de jeu", "Fin du tour"];

function suiviPhase() {
    phases.forEach(phase => {
        console.log(`Phase actuelle : ${phase}`);
    });
}

function listerTokens() {
    tokens.forEach(t => {
        console.log(`Jeton actif : ${t}`);
    });
}

suiviPhase();
listerTokens();
