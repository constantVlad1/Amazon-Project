import {renderCheckoutHeader} from "./checkout/checkoutHeader.js"
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymantSummary.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js'
//import '../data/backend_practice.js';

loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});