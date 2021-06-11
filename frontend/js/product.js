// Récupération de l'id de l'article sélectionné dans la page précédente
const ARTICLE_ID = window.location.search.substr(1);

// Récupération de l'article et son "id" depuis le serveur

fetch(`http://localhost:3000/api/teddies/${ARTICLE_ID}`)
  .then((response) => response.json())
  .then((data) => {
    let jsonListArticle = "";

    // Création des éléments html
    jsonListArticle += `<div>
                            <h2 class="card__article__choice" style="font-weight:bold; font-size:1.3rem">${
                              data.name
                            }</h2>
                            <p class="card__article__choice" href="./product.html?${
                              data._id
                            }">
                                <img class="card__article__choice__img" src="${
                                  data.imageUrl
                                }" alt="image nounours" style="width:100%; border-radius: 15px";></p>
                            <p class="card__article__choice">${
                              data.description
                            }</p>              
                            <span class="card__article__choice" style="font-size:1.5rem">${
                              data.price / 100
                            } €</span>
                            
                            <!-- Sélection de la couleur -->       
                            <label for="color-select"><h3 style="font-size:1.2rem"><strong>De quelle couleur sera-t-il ?</strong></h3></label>
                            <span class="card__article__choice"><select class="colorChoice" style="width:130px; height:30px;font-size:1rem; font-family: 'Finger Paint', cursive; cursor:pointer;">                                             
                                        <!-- Choix de la couleur -->
                     
                            </select></span>  
                                                          
                            <button class="addBasket" style="font-family: 'Finger Paint', cursive; border:none; background-color:#fff; padding:12px; border-radius:15px; box-shadow: 0px 0px 8px 0px white;cursor:pointer;"><strong>Ajouter au panier</strong></button>
                        </div>`;

    document.getElementById("article__details").innerHTML = jsonListArticle;

    // Création d'une fonction avec boucle "foreach" <!-- choix de la couleur -->
    let choice = document.querySelector(".colorChoice");

    data.colors.forEach(function (colors) {
      let option = document.createElement("option");
      option.textContent = colors;
      option.value = colors;
      choice.appendChild(option);
    });

    // Evènement "click" : déclenchement de la fonction ajout article au panier
    let basketButton = document.querySelector(".addBasket");

    basketButton.addEventListener("click", () => {
      let select = document.querySelector(".colorChoice");
      data.colorSelect = select.value;
      addItemBasket(data);
      
    });
  })

  // Message d'erreur
  .catch((err) => console.log(err));

// Fonction ajout article au panier
function addItemBasket(item) {
  // variable tableau

  
  let arrayItem = [];

  // stockage dans un objet
  let objectItemBasket = {
    _id: item._id,
    imageUrl: item.imageUrl,
    name: item.name,
    price: item.price,
    colorSelect: item.colorSelect,
    quantity: 1,
  };

  let otherItem = true;

  // Si localStorage est vide, création nouveau tableau "arrayItem" et enregistrement dans localStorage
  if (localStorage.getItem("teddy") === null) {
    arrayItem.push(objectItemBasket);
    localStorage.setItem("teddy", JSON.stringify(arrayItem));
  }

  // Sinon récupération du tableau de localStorage et ajout nouveau produit et enregistrement nouveau tableau
  else {
    arrayItem = JSON.parse(localStorage.getItem("teddy"));
    arrayItem.forEach((product) => {
      if (
        item._id === product._id &&
        item.colorSelect === product.colorSelect
      ) {
        product.quantity += 1;
        otherItem = false;
      }
    });

    // Si nouveau produit, création nouveau tableau "arrayItem" et enregistrement dans localStorage
    if (otherItem) arrayItem.push(objectItemBasket);
    localStorage.setItem("teddy", JSON.stringify(arrayItem));
  }

}
