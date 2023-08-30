import { useState } from "react";

const ToggleChallenge = () => {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "hide component" : "show component"}
      </button>
      {showComponent && <SomeComponent />}
    </div>
  );
};

function SomeComponent() {
  return (
    <div className="alert alert-success">
      <h5>Some text in a different component</h5>
    </div>
  );
}

export default ToggleChallenge;
