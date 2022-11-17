import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (cart, { payload: product }) => {
      const cartItem = cart.find((cartItem) => cartItem._id === product._id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        const newCartItem = { ...product, quantity: 1 };
        cart.push(newCartItem);
      }
    },
    removeCartItem: (cart, { payload: product }) => {
      const cartItem = cart.find((cartItem) => cartItem._id === product._id);

      if (cartItem) cartItem.quantity--;
    },
  },
});

export const getCart = (state) => state.entities.cart;

export const getProductQuantity = (productId) => (state) => {
  const cartItem = state.entities.cart.find(
    (cartItem) => cartItem._id === productId
  );
  return cartItem ? cartItem.quantity : 0;
};

export const getCartQuantity = (state) =>
  state.entities.cart.reduce(
    (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
    0
  );

export const { addCartItem, removeCartItem } = slice.actions;
export default slice.reducer;
