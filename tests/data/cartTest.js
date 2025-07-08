import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
  })

  it('adds an existing product to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: '3ebe75dc-64d2-4137-8860-1f5a963e534b',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });

    loadFromStorage();

    addToCart('3ebe75dc-64d2-4137-8860-1f5a963e534b');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('3ebe75dc-64d2-4137-8860-1f5a963e534b');
    expect(cart[0].quantity).toEqual(2);

    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: '3ebe75dc-64d2-4137-8860-1f5a963e534b',
      quantity: 2,
      deliveryOptionId: '1'
    }]));
  });

  it('adds a new product to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    loadFromStorage();

    addToCart('3ebe75dc-64d2-4137-8860-1f5a963e534b');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('3ebe75dc-64d2-4137-8860-1f5a963e534b');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: '3ebe75dc-64d2-4137-8860-1f5a963e534b',
      quantity: 1,
      deliveryOptionId: '1'
    }]))
  })
});

describe('Remove from cart', () => {
  
});