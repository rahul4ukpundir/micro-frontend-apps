import faker from "faker";

const carts = `<div>you are cart is ${faker.random.number()}</div>`;

document.getElementById("cart-items").innerHTML = carts;

