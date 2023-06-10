"use client";
import React, { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

const Login = () => {
  const [username, setUsername] = useState("");
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispatch(logIn(username));
  };
  const onClickLToggle = () => {
    dispatch(toggleModerator());
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };
 
  return (
    <div>
      <input
        className="text-black"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={onClickLogin}>Log In</button>
      <br />
      <button onClick={onClickLogout}>Log Out</button>
      <br />
      {isAuth && (
        <button onClick={onClickLToggle}>Toggle Moderator Status</button>
      )}
    </div>
  );
};

export default Login;
