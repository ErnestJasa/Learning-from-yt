import { createContext, useContext, useState } from "react";
import {} from "react";
const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

function AppContext({ children }) {
  const [name, setName] = useState("fds");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
