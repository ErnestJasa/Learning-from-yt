import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import client from "./google-client-id.json";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const loginInfo = window.localStorage.getItem("loginInfo");
  function handleCallBackResponse(response) {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    window.localStorage.setItem("loginInfo", response.credential);
    document.getElementById("signIn").hidden = true;
  }
  useEffect(() => {
    if (loginInfo !== null) {
      const userObject = jwt_decode(loginInfo);
      setUser(userObject);
      document.getElementById("signIn").hidden = true;
      return;
    }
    /* global google */
    google.accounts.id.initialize({
      client_id: client.client_id,
      callback: handleCallBackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
  }, [loginInfo]);

  function handleSignOut(e) {
    setUser({});
    window.localStorage.removeItem("loginInfo");
    document.getElementById("signIn").hidden = false;
  }
  return (
    <div className="App">
      <div id="signIn"></div>
      {Object.keys(user).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)}>Logout</button>
      )}
      {user && (
        <div>
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
