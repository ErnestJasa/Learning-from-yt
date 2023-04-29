import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import {useState, createContext} from "react";
import 'bootstrap/dist/css/bootstrap.css'

export const AppContext = createContext();

function App() {
    const [username, setUsername] = useState('NameUser')


        // const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        // let randomString = "";
        // for (let i = 0; i < 5; i++) {
        //     randomString += symbols.charAt(Math.floor(Math.random() * symbols.length));
        // }

    //console.log(randomString)


  return (
    <div className="App">
        <AppContext.Provider value={{username, setUsername}}>
        <Router>
            <Routes>
                <Route path='/' element={<Home testas="testas"/>}/>
                <Route path='/profile/:roomId' element={<Profile/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
        </Router>
        </AppContext.Provider>
    </div>
  );
}

export default App;
