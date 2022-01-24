const redux = require("redux");

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState(); //스토어의 최신 상태를 반환합니다.
  console.log(latestState);
};

store.subscribe(counterSubscriber); // 상태가 바뀔 때 호출될 함수를 등록합니다.

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
