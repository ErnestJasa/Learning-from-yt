import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  function handleClick() {
    setValue(() => {
      const newState = value + 1;
      console.log(newState); // to get the new state, you would need to provide a function
      return newState;
    });
  }
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button onClick={handleClick} className="btn">
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
