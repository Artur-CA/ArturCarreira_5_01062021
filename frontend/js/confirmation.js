// Récupération du N° de commande dans les paramètres de l'URL
const ORDER_ID = window.location.search.substr(9);

// Récupération données contact
let contact = JSON.parse(sessionStorage.getItem("contact"));

// Récupération prix total
let totalPrice = JSON.parse(sessionStorage.getItem("totalPrice"));

// Affichage html
function userConfirm() {
  confirmation.innerHTML += `<br>
        <p style="text-transform:capitalize"><strong>${contact.firstName} ${contact.lastName}</strong></p><br>
        <p>Nous avons bien reçu votre commande N°<span style="font-family:arial"> ${ORDER_ID}</span> d'un montant de :<span style="font-family:arial"> ${totalPrice}</span></p><br>
        <p>Lors de son expédition, un email sera envoyé à l'adresse suivante : ${contact.email}</p><br>
        <p style="margin-bottom:50%;"><strong>Orinoco vous remercie !</strong></>
        `;
}

userConfirm();

