import { useReducer, useState } from "react";
import { RESET_LIST, CLEAR_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";
import { defaultState } from "./reducer";

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  function clearList() {
    dispatch({ type: CLEAR_LIST });
  }
  function resetList() {
    dispatch({ type: RESET_LIST });
  }
  const { people } = state;
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
