import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>short circuit - examples</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h5>hello there {user.name}</h5>
        </div>
      ) : (
        <h5>Login</h5>
      )}
    </div>
  );
};

function SomeComponent({ name }) {
  return (
    <div>
      <h4>returning from 2nd component</h4>
      <h4>{name}</h4>
    </div>
  );
}

export default ShortCircuitExamples;
