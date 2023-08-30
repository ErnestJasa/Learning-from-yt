import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  function Login() {
    // normally connect to Db or api
    setUser({ name: "Some user name" });
  }
  function Logout() {
    setUser(null);
  }

  return (
    <section>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <button onClick={Logout} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={Login} className="btn">
          Login
        </button>
      )}
    </section>
  );
};

export default UserChallenge;
