import { useAppContext } from "./Navbar";

function UserContainer() {
  const { user, logout } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>User: {user.name}</p>
          <button onClick={logout} className="btn">
            Logout
          </button>
        </>
      ) : (
        <button className="btn">Login</button>
      )}
    </div>
  );
}
export default UserContainer;
