/* Exemple API avec fetch()
API tierce : https://techy-api.vercel.app
URL à utiliser : https://techy-api.vercel.app/api/json
 */

// --------------------- MANIPULATION DU DOM -----------------------------------

function initDOM() {
  // on effece le contenu de l'élément <ul>
  resultsListElement.innerHTML = "";
  // on le cache, ainsi que le bouton de réinitialisation
  resultsListElement.style.display = "none";
  resetButtonElement.style.display = "none";
}

function updateDOM(message) {
  // on crée un élement <p> contenant le message
  const pElement = document.createElement("p");
  pElement.innerText = message;

  // imbriqué dans un élément <li>
  const liElement = document.createElement("li");
  liElement.appendChild(pElement);

  // et on insère le tout dans l'élément <ul>
  resultsListElement.appendChild(liElement);

  // on affiche liste et bouton de réinitialisation
  // si la liste n'est pas vide
  if (resultsListElement.childElementCount > 0) {
    resultsListElement.style.display = "block";
    resetButtonElement.style.display = "block";
  }
}

// ------------------ REQUÊTE AJAX ---------------------------------------------

// avec async / await

async function fetchAPIData() {
  // À commenter ou supprimer
  return "Have you tried turning it off and on again?";

  // on invoque la fonction fetch() qui prend l'URL de la requête en paramètre
  // pour récupérer un objet Response quand la promesse est résolue

  
  // on s'assure que la requête a réussi en testant les propriétés ok et status
  // de la réponse

    // on invoque la méthode json() de l'objet Response pour récupérer un
    // Object JS quand la promesse est résolue

    // on extrait les données de l'Object et on les renvoie

  // sinon on affiche un message d'erreur

  }

// ------------------- FONCTION PRINCIPALE -------------------------------------

async function getMessage() {
  // on fait une requête vers l'API tierce pour obtenir les données
  let message = await fetchAPIData();
  // ponctuation aléatoire
  message += Math.random() > 0.5 ? "." : "!";
  // on met à jour le DOM en fonction du résultat
  updateDOM(message);
}

// ----------- REFERENCES AU DOM ET GESTION DES ÉVÉNEMENTS ---------------------

// référence à l'élément <ul> pour la manipulation du DOM
const resultsListElement = document.getElementById("results");

// rattachement de la fonction principale à son bouton
const ajaxButtonElement = document.getElementById("ajax-button");
ajaxButtonElement.addEventListener("click", getMessage);

// rattachement de la fonction de réinitialisation à son bouton
const resetButtonElement = document.getElementById("reset-button");
resetButtonElement.addEventListener("click", initDOM);

// -------------------- INITIALISATION DU DOM ----------------------------------

initDOM();
