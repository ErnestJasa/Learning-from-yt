import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return;
    }
    const newUser = {
      id: users[users.length - 1].id + 1,
      name: name,
    };
    setUsers([...users, newUser]);
    setName("");
  }
  function removeUser(id) {
    const updatedList = users.filter((user) => user.id !== id);
    setUsers(updatedList);
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-input"
            id="name"
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((user) => {
        return (
          <div>
            <h4 key={user.id}>
              {user.name}{" "}
              <button className="btn" onClick={() => removeUser(user.id)}>
                Remove
              </button>
            </h4>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
