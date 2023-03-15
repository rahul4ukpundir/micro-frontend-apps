import faker from "faker";



const mount =(element) =>{
    let productName = '';
    for(var i =0; i<3; i++){
        const name = faker.commerce.productName();
        productName+= `<div>${name}<div>`;
    }
    
    element.innerHTML = productName;
}
//for checking the functionality on developement phase
//working or not.
if(process.env.NODE_ENV === "development"){
    const element = document.querySelector("#product_data");
    if(element){
        mount(element)
    }
}

export {mount} ;