import React from 'react';
import {Link, useParams} from "react-router-dom";
import ChangeProfile from "../components/ChangeProfile";
import {useContext} from "react";
import {AppContext} from "../App";

const Profile = () => {
    const {username} = useContext(AppContext)
    const {roomId} = useParams()

    return (
        <div>
            <h3><Link to='/'>To home</Link></h3>
            <h2>Profile page</h2>
            <h2>User is: {username}</h2>
            <h3>params: {roomId}</h3>
            <ChangeProfile/>
        </div>
    );
};

export default Profile;