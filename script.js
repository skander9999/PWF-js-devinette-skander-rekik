// Étape 1 : Message de bienvenue
alert("Bienvenue au jeu de devinette de nombre !");

// Étape 2 : Définir les limites et générer le nombre mystère
let min = 1;
let max = 100;
const nombreMystere = Math.floor(Math.random() * max) + min;
let tentative = 0;
let deviner = false;

// Étape 3 : Boucle de jeu principale
while (!deviner) {
    // Étape 4 : Interaction avec l'utilisateur
    let reponse = prompt(`Devinez le nombre entre ${min} et ${max} :`);
    
    // Si l'utilisateur annule
    if (reponse === null) {
        alert("Jeu annulé. Merci d'avoir joué !");
        break;
    }
    
    // Convertir la réponse en nombre
    let nombreUtilisateur = parseInt(reponse);
    tentative++;
    
    // Vérifier si l'entrée est valide
    if (isNaN(nombreUtilisateur)) {
        alert("Veuillez entrer un nombre valide !");
        continue;
    }
    
    // Vérifier la réponse
    if (nombreUtilisateur < nombreMystere) {
        alert("C'est plus !");
    } else if (nombreUtilisateur > nombreMystere) {
        alert("C'est moins !");
    } else {
        // Réponse correcte
        deviner = true;
        alert(`Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`);
    }
}