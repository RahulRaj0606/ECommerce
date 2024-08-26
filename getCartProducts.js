import { updatecartValue } from "./updatecartValue";

export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductLS")
    if (!cartProducts) {
        return [];
    }

    cartProducts = JSON.parse(cartProducts);
    updatecartValue(cartProducts);
    return cartProducts;

   
};