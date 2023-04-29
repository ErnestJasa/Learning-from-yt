import React from "react";
import Signup from "./components/Signup";
import {Routes, Route} from "react-router-dom";
import Signin from "./components/Signin";
import Account from "./components/Account";
import {AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
        <h1 className='text-center text-3xl font-bold'>
            FireBase Auth & context
        </h1>
        <AuthContextProvider>
            <Routes>
                <Route path='/' element={<Signin/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/account' element={
                    <ProtectedRoute><Account/></ProtectedRoute>
                    }></Route>
            </Routes>
        </AuthContextProvider>
    </div>
  );
}

export default App;
