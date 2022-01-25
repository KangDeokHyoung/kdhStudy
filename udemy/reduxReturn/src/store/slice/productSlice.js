import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  counter: 0,
  toggle: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    Decrement: (state) => {
      state.counter += 1;
    },
    toggle: (state) => {
      state.toggle = true;
    },
  },
});

export const { increment, Decrement } = productSlice.action;
