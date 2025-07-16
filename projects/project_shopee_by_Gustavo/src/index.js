import * as cartService from "./services/cart.js"
import creatItem from "./services/itens.js";
const myCart = []

console.log("Welcome to the your Shopee Cart!");

const item1 = await creatItem("whells", 20.99, 3);
const item2 = await creatItem("hlamborginiu", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.delItem(myCart, item1.name);

console.log("Shopee Cart!");
await cartService.calculateTotal(myCart);
await cartService.displayCart(myCart);
