const Person = ({ name, removePerson, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn" onClick={() => removePerson(id)}>
        Remove person
      </button>
    </div>
  );
};
export default Person;
