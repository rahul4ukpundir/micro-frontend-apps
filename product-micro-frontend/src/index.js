import faker from "faker";

let productName = '';

for(var i =0; i<3; i++){
    const name = faker.commerce.productName();
    productName+= `<div>${name}<div>`;
}

document.getElementById("product_data").innerHTML = productName;
console.log(productName);