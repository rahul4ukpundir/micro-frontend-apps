import faker from "faker";

const mount = (element) => {
  if (element) {
    element.innerHTML = `<div>you are cart is ${faker.random.number()}</div>`;
  }
};

if (process.env.NODE_ENV === "development") {
  mount(document.querySelector("#cart_items"));
}

export { mount };
