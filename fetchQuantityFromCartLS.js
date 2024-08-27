import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id , price) => {
    let cartProducts = getCartProductFromLS();

    let exisitingProduct = cartProducts.find((curProd) => curProd.id === id);
    let quantity = 1;

    if(exisitingProduct){
        quantity = exisitingProduct.quantity;
        price = exisitingProduct.price;
    }

    return {quantity, price};

};