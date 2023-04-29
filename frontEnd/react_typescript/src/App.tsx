import React, {FC, createContext} from 'react';
import './App.css'
import Person, {HairColor} from "./components/Person";

interface AppContextInterface{
    name: string;
    age: number
    country: string
}

const AppContext = createContext<AppContextInterface | null>(null)

const App:FC = () => {

    const contextValue: AppContextInterface = {
        name: 'Pedro',
        age: 20,
        country: "Brazil"
    }

    return (
        <AppContext.Provider value={contextValue}>
            <div className="App">
                <Person hairColor={HairColor.Brown} name='Vard' age={30} email='email@email.email'/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
