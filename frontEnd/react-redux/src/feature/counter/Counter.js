import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./postSlice";
import Komponentas from "../../Komponentas";

const Counter = () => {
  const posts = useSelector((state) => state.post.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
       
        <button
          className=""
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <Komponentas/>
      </div>
    </div>
  );
};

export default Counter;
