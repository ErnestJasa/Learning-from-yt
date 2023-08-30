import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("susan");

  return (
    <div>
      <h2>short circuit overview</h2>
      <h4>
        {/* will display hello world */}
        Falsy OR : {text || "hello world"}
      </h4>
      <h4>
        {/* will display empty string (text) */}
        Falsy AND : {text && "hello world"}
      </h4>
      <h4>
        {/* will display name */}
        Truthy OR : {name || "hello world"}
      </h4>
      <h4>
        {/* will display hello world */}
        Truthy AND : {name && "hello world"}
      </h4>
    </div>
  );
};
export default ShortCircuitOverview;
