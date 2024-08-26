const cartValue = document.querySelector("#cartValue");


export const updatecartValue = (cartProducts) => {
    return cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`
}