// Récupération des données avec l'API fetch
fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((data) => 
  {
    // Création d'une variable
    let jsonListArticle = "";

    // Boucle pour récupérer les données
    for (let i = 0; i < data.length; i += 1) 
    {
      console.log(data[i].name);

      // Création des éléments html
      jsonListArticle += `<div class="card">
                              <h2 class="card__article">${data[i].name}
                              </h2>
                              <a class="card__article" href="./product.html?${data[i]._id}">
                              <figure class="card__article__fig"><img class="card__article__img" src="${data[i].imageUrl}" alt="image nounours" style="width:100%; border-radius: 15px";>
                                <figcaption>En savoir p'luch</figcaption>
                              </figure>
                              </a>              
                            </div>`;
    }

    // Ajout des éléments html
    document.getElementById("article").innerHTML = jsonListArticle;
  })

  // Message d'erreur
  .catch((err) => console.log(err));




