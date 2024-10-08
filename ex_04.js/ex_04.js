document.querySelectorAll('.item').forEach(item => {
    const plusButton = item.querySelector('.plus-btn');
    const minusButton = item.querySelector('.minus-btn');
    const deleteButton = item.querySelector('.delete-btn');
    const likeButton = item.querySelector('.like-btn');
    const quantityInput = item.querySelector('input[type="text"]');

    let quantity = parseInt(quantityInput.value);

    minusButton.addEventListener('click', () => {
        if (quantity > 1) { 
            quantity--;
            quantityInput.value = quantity; 
        }
    });
    plusButton.addEventListener('click', () => {
        quantity++;
        quantityInput.value = quantity;
    });
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('is-active'); 
    });
    deleteButton.addEventListener('click', () => {
        item.remove(); 
    });


});