import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("name:" + name + ", email: " + email);
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Controlled Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name=""
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default ControlledInputs;
