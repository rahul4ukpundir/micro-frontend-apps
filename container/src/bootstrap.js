import {mount as productMount} from  "products/ProductIndex";
import {mount  } from 'carts/CartsIndex';

productMount(document.querySelector("#products_details"));
mount(document.querySelector("#test_cart"));
