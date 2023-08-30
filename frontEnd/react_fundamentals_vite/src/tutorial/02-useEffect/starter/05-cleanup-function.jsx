import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <SomeComponent />}
    </div>
  );
};

function SomeComponent() {
  // useEffect(() => {
  //   console.log("interesing");
  //   const intId = setInterval(() => {
  //     console.log("from interval");
  //   }, 1000);
  //   return () => {
  //     clearInterval(intId);
  //   };
  // }, []);

  useEffect(() => {
    function someFunc() {
      // some logic
    }
    window.addEventListener("scroll", someFunc); // everytime the component is mounted, a new event listener is added
    return () => {
      window.removeEventListener("scroll", someFunc); // the event listener is removed after the component dismounts
    };
  }, []);
  return <h3>Hello there</h3>;
}

export default CleanupFunction;
