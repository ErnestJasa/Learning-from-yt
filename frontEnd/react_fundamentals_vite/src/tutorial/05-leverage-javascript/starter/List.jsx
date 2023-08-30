import { Person } from "./Person";
import { people } from "./../../../data";
function List() {
  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <Person key={person.id} {...person} />
        ))}
      </ul>
    </div>
  );
}
export default List;
