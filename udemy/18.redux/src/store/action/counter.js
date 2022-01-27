import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, toggle } = counterSlice.actions;

export default counterSlice.reducer;
