import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, toggle } from "../store/action/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const IncrementHandler = () => {
    dispatch(increment());
  };

  const DecrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandlers = () => {
    dispatch(toggle());
  };

  return (
    <main>
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
