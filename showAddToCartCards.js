
import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();


let filterProducts = products.filter((curProd) => {
 return cartProducts.some((curElem) => curElem.id === curProd.id);
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) =>{
        const {category ,id , name , stock , price , image} = curProd

        let productClone = document.importNode(templateContainer.content, true);

        const LSActualData = fetchQuantityFromCartLS(id , price);

        productClone.querySelector('#cardValue').setAttribute("id", `card${id}`);
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productPrice').textContent = LSActualData.price;
        productClone.querySelector('.productQuantity').textContent = LSActualData.quantity;

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event , id , stock , price);
        });

        productClone.querySelector(".remove-to-cart-button").addEventListener('click' , () => removeProdFromCart(id));

        cartElement.appendChild(productClone);
    });
};


showCartProduct();
updateCartProductTotal();
