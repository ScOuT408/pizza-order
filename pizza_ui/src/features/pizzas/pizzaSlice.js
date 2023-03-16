import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./pizzaApi";

export const getPizzas = createAsyncThunk(
  "pizza/getPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const response = await service.getPizzas();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const getPizzaById = createAsyncThunk(
//   "pizza/getPizzaById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await service.getPizzaById(id);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    loading: false,
    pizzas: [],
    // singlepizza: {},
    error: null,
  },
  extraReducers: {
    // register extraReducers
    [getPizzas.pending]: (state) => {
      state.loading = true;
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.loading = false;
      state.pizzas = action.payload;
    },
    [getPizzas.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      console.log(action.payload.message);
    },

    // register extraReducers
    // [getPizzaById.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getPizzaById.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.singlepizza = action.payload;
    // },
    // [getPizzaById.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    //   console.log(action.payload.message);
    // },
  },
});

export default pizzaSlice.reducer;
