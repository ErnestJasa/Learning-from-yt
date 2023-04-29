import React, {useState} from 'react';
import {useContext} from "react";
import {AppContext} from "../App";

const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState('')
    const {setUsername} = useContext(AppContext)
    return (
        <div>
            <input onChange={(e)=> {setNewUsername(e.target.value)}} type="text"/>
            <button onClick={()=>{setUsername(newUsername)}}>Change username</button>
        </div>
    );
};

export default ChangeProfile;