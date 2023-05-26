import React from "react";
import { Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
// https://youtu.be/FqxtDabMUEQ?t=472 tutorial


const Index = () => {
  const { push } = useRouter();
  const { isLoading, user, error } = useUser();
  
  console.log(user)
  if(isLoading){
    return (
      <Heading>
        Loading...
      </Heading>
    )
  }

  const handleLogin = () => {
    push("/api/auth/login");
  };
  const handleLogout = () => {
    push("/api/auth/logout");
  };
  
  return (
    <>
      {user ? (
        <>
          <Heading>{user.name === '' ? user.nickname : user.name}</Heading>
          <Button onClick={handleLogout}>Log out</Button>
        </>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </>
  );
};


export default Index;
