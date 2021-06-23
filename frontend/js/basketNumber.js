// Affichage nombre article panier
function displayNumber() {
    
    basketNumber = document.getElementById('totalQuantity')
    let basketQuantity = 0;

    if (sessionStorage.getItem('teddy') !== null) {
        
        let number = JSON.parse(sessionStorage.getItem('teddy'));
        
        number.forEach((prod) => {
            basketQuantity += prod.quantity;
        });
    }
    basketNumber.textContent = basketQuantity;
}

// Appel fonction
displayNumber()