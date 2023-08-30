import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // async function getUsers() {
    //   const response = await fetch(url);
    //   const users = await response.json();
    //   console.log(users);
    // }
    // getUsers();
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setUsers(data));

      console.log(users);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <section>
      <h2>fetch data example</h2>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt="" />
            <div>
              <h5>{user.login}</h5>
              <a href={user.html_url}>Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default FetchData;
