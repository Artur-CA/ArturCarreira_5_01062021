// Récupération des données avec l'API fetch
fetch('http://localhost:3000/api/teddies')
  .then((data) => data.json())
  .then((jsonListArticle) => {

// Création d'une variable
    let response = "";

// Boucle pour récupérer les données
    for(let i = 0; i < jsonListArticle.length; i++) {
      console.log(jsonListArticle[i].name);
      
// Création des éléments html
      response += `<div class="card">
                      <h2 class="card__item">${jsonListArticle[i].name}</h2>
                      <a class="card__item" href="./product.html?${jsonListArticle[i]._id}">
                        <figure class="card__item__fig"><img class="card__item__img" src="${jsonListArticle[i].imageUrl}" alt="image nounours" style="width:100%; border-radius: 15px";>
                        <figcaption>En savoir p'luch</figcaption></figure>
                      </a>              
                      <span class="card__item"><strong>${(jsonListArticle[i].price/100)} €</strong></span>
                    </div>`
    }

// Ajout des éléments html      
    document.getElementById("article").innerHTML = response;
})

// Message d'erreur
.catch(err => {
  errorMessage();
});










