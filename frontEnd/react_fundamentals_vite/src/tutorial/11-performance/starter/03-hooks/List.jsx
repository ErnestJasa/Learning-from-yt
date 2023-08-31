import Person from "./Person";
import { memo } from "react"; // used to check if props changed and if the component needs to be rerendered
const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} removePerson={removePerson} />
        );
      })}
    </div>
  );
};
export default memo(List);
