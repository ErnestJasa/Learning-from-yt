import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>useState basics</h2>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateBasics;
