import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null); // useRef doesn't trigger a rerender
  const isMounted = useRef(false);
  // console.log(refContainer);

  useEffect(() => {
    refContainer.current.focus(); // because it doesn't trigger a rerender, useEffect only runs once
  });

  useEffect(() => {
    // console.log(isMounted);
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("rerender");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={refContainer}
            type="text"
            id="name"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
