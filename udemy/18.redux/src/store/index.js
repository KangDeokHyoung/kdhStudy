/* eslint-disable default-case */
import { createStore } from "redux";
import { produce } from "immer";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  // return produce(state, (draft) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       draft.counter = state.counter + 1;
  //       break;
  //     case "DECREMENT":
  //       draft.counter = state.counter - 1;
  //       break;
  //     case "TOGGLE":
  //       draft.showCounter = !state.showCounter;
  //       break;
  //   }
  // });

  if (action.type === "INCREMENT") {
    return produce((state, draft) => draft.push({ counter: state.counter + 1 }));
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "INCREASEBY5") {
    return { counter: state.counter + action.value, showCounter: state.showCounter };
  }
  if (action.type === "TOGGLE") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
