import Starter from "./tutorial/06-forms/starter/02-user-challenge";
// if in the folder there is an index file, we dont need to specify the file like this /Navbar/Navbar
import Navbar from "./tutorial/04-project-structure/starter/Navbar";
// we can import multiple components/pages in one line if we export as named exports (look in 04/starter/Pages/index)
import { Home, About } from "./tutorial/04-project-structure/starter/Pages";
import { useContext } from "react";
import List from "./tutorial/05-leverage-javascript/starter/List";

// https://youtu.be/Flbw5BX_AX0?list=PLuyywttDftVVtpTZoeTV8bpsTdTX5CrU6&t=31895

function App() {
  return (
    <div className="container">
      <Starter />
      {/* <List /> */}
    </div>
  );
}

export default App;
