import { createSlice, current } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: fetchFromLocalStorage(),
    quantity: 0,
    total: 0,
  },
  reducers: {
    addPizza: (state, action) => {
      const item = state.products.find((p) => p._id === action.payload._id);
      if (item) item.quantity++;
      else state.products.push(action.payload);

      localStorage.setItem("cart", JSON.stringify(state.products));
      state.quantity += 1;
      console.log(action.payload.price);
      state.total += action.payload.price * action.payload.quantity;
    },
    increaseQuantity: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload
      );
      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity: state.products[existingIndex].quantity + 1,
        };
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decreaseQuantity: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload
      );
      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity: state.products[existingIndex].quantity - 1,
        };
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    removeCart: (state, action) => {
      state.products = state.products.filter((product) => {
        return product._id !== action.payload;
      });
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    clearCart: (state) => {
      state.products = [];
      storeInLocalStorage(state.products);
    },
  },
});

export const {
  addPizza,
  increaseQuantity,
  decreaseQuantity,
  removeCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
