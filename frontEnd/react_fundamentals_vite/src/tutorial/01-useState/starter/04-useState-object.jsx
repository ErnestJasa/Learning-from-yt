import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  function displayJohn() {
    setPerson({
      name: "john",
      age: 31,
      hobby: "scream at computer",
    });
  }

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayJohn}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
