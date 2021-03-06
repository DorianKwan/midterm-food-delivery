$(() => {
  // Returns an object full of users cart items

  const cartItems = JSON.parse(window.localStorage.getItem('cart'));

  // Function to add all item in cart together
  // TODO: REFACTOR to reduce method

  function getSubTotal(items) {
    if (cartItems) {
      let subTotal = 0.00;
      for (let cartItemKey of Object.keys(cartItems)) {
        for (let itemKey = 0; itemKey < items.length; itemKey += 1) {
          if (cartItemKey == items[itemKey].name) {
            let index = itemKey;
            subTotal += items[index].price * cartItems[cartItemKey].amount;
          }
        }
      }
      return subTotal;
    }
  }

  // Creates template for the price of the order

  function createPriceElement(items) {
    if (cartItems) {
      const html = `
        <tr id="subtotal">
          <td>Subtotal</td>
          <td class="text-right">$${(getSubTotal(items)).toFixed(2)}</td>
        </tr>
        <tr id="tax">
          <td>Tax</td>
          <td class="text-right">$${(getSubTotal(items) * 0.05).toFixed(2)}</td>
        </tr>
        <tr id="total">
          <th>Total:</th>
          <td class="text-right">$${(getSubTotal(items) * 1.05).toFixed(2)}</td>
        </tr>
      `;
      return html;
    }
  }

  $.ajax({
    method: 'GET',
    url: '/api/menu_items',
  }).done((items) => {
    $('.price > tbody').append(createPriceElement(items));
  });
});
