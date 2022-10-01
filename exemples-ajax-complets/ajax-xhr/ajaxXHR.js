/* Exemple API tierce avec XMLHttpRequest
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

// avec XMLHttpRequest

function requestAPIData() {
  // return "Have you tried turning it off and on again?";

  // on instancie un nouvel objet de classe XMLHttpRequest
  // et on l'assigne à une constante
  const httpRequest = new XMLHttpRequest();

  // on attribue la fonction de rappel déclenchée quand la requête est
  // terminée avec succès à l'aide d'un EventListener
  httpRequest.addEventListener("load", updateContents);

  // on instancie une nouvelle requête http grâce à la méthode open()
  // (on passe en paramètre la méthode et l'URL de l'API tierce)
  httpRequest.open("GET", "https://techy-api.vercel.app/api/json");

  // et on envoie la requête
  httpRequest.send();
}

// définition de la fonction de rappel qui traite les données
// et déclenche la manipulation du DOM

function updateContents(loadEvent) {
  // on récupère la référence à la requête via l'événement load
  const httpRequest = loadEvent.target;

  console.log(`code d'état HTTP : ${httpRequest.status}`);

  // si le code d'état HTTP de la réponse n'est pas 200, on quitte
  if (httpRequest.status !== 200) {
    updateDOM("An error occurred. You may go back on Tik-Tok.");
    return;
  }

  // on désérialise le texte vers un Object
  const responseText = httpRequest.responseText;
  const JSObject = JSON.parse(responseText);

  // on traite le message
  let message = JSObject.message;
  // ponctuation aléatoire
  message += Math.random() > 0.5 ? "." : "!";

  // avec cette méthode on appelle la fonction de manipulation du DOM
  // depuis cette fonction de rappel
  updateDOM(message);
}

// ----------- REFERENCES AU DOM ET GESTION DES ÉVÉNEMENTS ---------------------

// référence à l'élément <ul> pour la manipulation du DOM
const resultsListElement = document.getElementById("results");

// rattachement de la fonction principale à son bouton
const ajaxButtonElement = document.getElementById("ajax-button");
ajaxButtonElement.addEventListener("click", requestAPIData);

// rattachement de la fonction de réinitialisation à son bouton
const resetButtonElement = document.getElementById("reset-button");
resetButtonElement.addEventListener("click", initDOM);

// -------------------- INITIALISATION DU DOM ----------------------------------

initDOM();
