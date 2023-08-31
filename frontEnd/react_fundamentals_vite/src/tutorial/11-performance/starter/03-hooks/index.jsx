import { useCallback, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import ExampleUseMemo from "./ExampleUseMemo";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  // useCallback is used to not rerender child components if the function itself was not called
  // because with memo javascript thinks that props changed and rerenders children too
  // even though in reality they did not change
  // the dependency array sets when this function should be regenerated again
  // if we didn't pass the people array into it, we would only be able to remove one person, and then it would just use that same array
  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  ExampleUseMemo();

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
