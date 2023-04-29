import React from 'react';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../App";

const Home = (props) => {
    const {username} = useContext(AppContext)
    const randomString = 'dfsg';
    const testas = props.testas
    return (
        <div className='text-center'>
           <h2>
               <Link to={'/profile/' + randomString}>To profile</Link>
           </h2>
            <h2>
                <Link to='/contact'>To contacts</Link>
            </h2>
            <h2>this is home. user is: {username}</h2>
        </div>
    );
};

export default Home;