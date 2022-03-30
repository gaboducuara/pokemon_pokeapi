import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  }

  const decrement = () => {
      dispatch( { type: "DECREMENT"});
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
