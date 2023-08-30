import { useState } from "react";
import { data } from "./../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  function removePerson(id) {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  function clearList() {
    setPeople([]);
  }
  function repopulateList() {
    setPeople(data);
  }
  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>{" "}
          <span>
            <button className="btn" onClick={() => removePerson(person.id)}>
              Remove
            </button>
          </span>
        </div>
      ))}
      <br />
      <br />
      <br />
      <div>
        <button className="btn" onClick={clearList}>
          Clear list
        </button>
      </div>
      <br />
      <div>
        <button className="btn" onClick={repopulateList}>
          Repopulate list
        </button>
      </div>
    </div>
  );
};

export default UseStateArray;
