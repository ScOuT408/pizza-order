import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import pizzaReducer from "./features/pizzas/pizzaSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizza: pizzaReducer,
    cart: cartReducer,
  },
});

export default store;
