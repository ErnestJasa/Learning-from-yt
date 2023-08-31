import { RESET_LIST, CLEAR_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

export const defaultState = {
  people: data,
  isLoading: false,
};

function reducer(state, action) {
  console.log(action);
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  // return state; // returns the last valid state if there are any errors while calling the reducer function
  throw new Error(`No matching "${action.type}" action type`); // throws an error if an action used in dispatch is not recognized
}
export default reducer;
