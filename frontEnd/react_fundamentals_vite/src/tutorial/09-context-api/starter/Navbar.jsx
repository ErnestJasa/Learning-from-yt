import NavLinks from "./NavLinks";
import { createContext, useContext, useState } from "react";

export const NavbarContext = createContext();

// custom hook

export function useAppContext() {
  return useContext(NavbarContext);
}

function Navbar() {
  const [user, setUser] = useState({
    name: "bob",
  });
  function logout() {
    setUser(null);
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}
export default Navbar;
