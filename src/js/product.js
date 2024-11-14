import { getParam } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// get the product id successfully when someone navigates to the product-details page
const productId = getParam("product");
const dataSource = new ExternalServices("tents");

const product = new ProductDetails(productId, dataSource);

loadHeaderFooter();
product.init();