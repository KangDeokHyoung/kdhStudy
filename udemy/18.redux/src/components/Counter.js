import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const IncrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const DecrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const Increaseby5 = () => {
    dispatch({ type: "INCREASEBY5", value: 5 });
  };

  const toggleCounterHandlers = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandlers}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
