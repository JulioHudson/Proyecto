const shoppingContainer = document.getElementsByClassName('shopping-container')[0]
const buttonOpen = document.querySelector('.shopping-bag')
const buttonClose = document.getElementById('cartClose')
const shoppingcart = document.getElementsByClassName('shopping-cart')[0]


buttonOpen.addEventListener('click', ()=>{
    shoppingContainer.classList.toggle('shopping-active')
})
buttonClose.addEventListener('click', ()=>{
    shoppingContainer.classList.toggle('shopping-active')
})

shoppingContainer.addEventListener('click', (event) =>{
    shoppingContainer.classList.toggle('shopping-active')

})
shoppingcart.addEventListener('click', (event) => {
    event.stopPropagation() 
})