// Récupération panier dans localStorage
let arrayItem = JSON.parse(localStorage.getItem("teddy")) ? JSON.parse(localStorage.getItem("teddy")) : [];


// Calcul prix total
let basketPrice = 0;
function priceTotalBasket(data)
{
  basketPrice += data.quantity * data.price / 100;

  // Affichage prix total
  let totalPrice = document.getElementById('totalPrice').textContent = basketPrice + " € ";
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
};


// Emplacement du html
let container = document.getElementById("basket__details");

// Affichage de chaque élément du panier
arrayItem.forEach((data, I) => 
{
  container.innerHTML += `
              <tr style="text-align:center; vertical-align:middle";>
                <td class="card__article__img" style="width:15%";><a href="./product.html?${data._id}"><img src=${data.imageUrl} alt="image nounours" style="border-radius: 15px; vertical-align:middle; margin: 20px 0px";/></td>
                <td>${data.price / 100} €</td>
                <td>${data.name}<br><span style="color:#bb7380";>${data.colorSelect}</span></td>
                <td>${data.quantity}</td>
                <td><a href="#" class="card__article__trash" data-index="${I}"><i class="fas fa-trash-alt" style="color:#8f5bfe";></i></a></td>
                <td >${data.quantity * data.price / 100} €</td>          
              </tr>`;

  // Appel fonction pour affichage "Total"
  priceTotalBasket(data)

  // Récupération id
  let articleId = [];

 // Incrémentation id
  for (let i = 0; i < data.quantity; i++) 
  {
    articleId .push(data._id);
  }
});


// Evènement "click" : déclenchement de la fonction vider le panier
let clearBasket = document.getElementById('clearBasket')
clearBasket.addEventListener('click', deleteBasket);

// Fonction vider le panier
function deleteBasket() 
{
  if (arrayItem === null) 
  {
  } 
  else 
  {
    localStorage.clear();
    window.location.reload();
  }
};

// Info panier vide
let globalContainer = document.getElementById("main__container__basket");
let empty = document.getElementById("emptyBasket");

if (arrayItem.length === 0) 
{
    globalContainer.style.display = 'none';
    empty.innerHTML += `
          <div style="color:#8f5bfe; font-weight:bold; margin-bottom: 100%";>Votre panier est vide !
          </div>`
};


// Evènement "click" : déclenchement de la fonction supprimer un teddy
document.querySelectorAll(".card__article__trash").forEach(trashBtn => 
{
    trashBtn.addEventListener('click', () => deleteTeddy(trashBtn.dataset.index))
});

// Fonction supprimer un teddy  
function deleteTeddy(I) 
{
    let teddy = arrayItem[I];
    if (teddy.quantity > 1) 
      teddy.quantity--;
    else 
      arrayItem.splice(I, 1);

    if (arrayItem.length === 0)
      localStorage.clear();
    else
      localStorage.setItem('teddy', JSON.stringify(arrayItem));

    window.location.reload();
};



