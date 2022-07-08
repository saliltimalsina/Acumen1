export const addtoCart = (product, quantity) => (dispatch, getState) => {
  const cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countInStock: product.countInStock,
    quantity: quantity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const deleteFromCart = (item) => (dispatch,getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
  //   var items = JSON.parse(localStorage.getItem("cartItems"));

  //   for (var i = 0; i < items.length; i++) {
  //     var items = JSON.parse(items[i]);
  //     if (items._id == item._id) {
  //       items.splice(i, 1);
  //     }
  //   }
  //   localStorage.setItem("cartItems", items);

  //   console.log(items);
  //   localStorage.removeItem("cartItems");
};
