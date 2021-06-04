// Récupération de l'id de l'article sélectionné dans la page précédente
const ARTICLE_ID = window.location.search.substr(1); 

// Récupération de l'article et son "id" depuis le serveur

fetch(`http://localhost:3000/api/teddies/${ARTICLE_ID}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
        
    let jsonListArticle = "";

    // Création des éléments html
    jsonListArticle += `<div>
                            <h2 class="card__article__choice" style="font-weight:bold; font-size:1.3rem">${data.name}
                            </h2>
                            <p class="card__article__choice" href="./product.html?${data._id}">
                                <img class="card__article__choice__img" src="${data.imageUrl}" alt="image nounours" style="width:100%; border-radius: 15px";>
                            </p>
                            <p class="card__article__choice">${data.description}
                            </p>              
                            <span class="card__article__choice" style="font-size:1.5rem">${(data.price/100)} €
                            </span>
                            
                            <!-- Sélection de la couleur -->       
                            <label for="color-select"><h3 style="font-size:1.2rem"><strong>De quelle couleur sera-t-il ?</strong></h3>
                            </label>
                            <span class="card__article__choice"><select id="color-select" style="width:130px; height:30px;font-size:1rem; font-family: 'Finger Paint', cursive;">                                             
                                        <!-- Choix de la couleur -->
                            </select></span>
                                
                            <button id="add-btn" style="font-family: 'Finger Paint', cursive; border:none; background-color:#fff; padding:12px; border-radius:15px; box-shadow: 0px 0px 8px 0px white;"><strong>Ajouter au panier</strong>
                            </button>
                        </div>`
                        
    document.getElementById("article__details").innerHTML = jsonListArticle;

    //Création d'une fonction "foreach" <!-- choix de la couleur -->
    let choice = document.querySelector("#color-select");
    console.log(choice);

    data.colors.forEach (function (colors) {
        let option = document.createElement("option");
        option.value = colors;
        option.textContent = colors;
        choice.appendChild(option)
        console.log(option);
    })

})

// Message d'erreur
.catch((err) => console.log(err));
        