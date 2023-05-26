import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from './../components/Navbar';
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider> 
      <Navbar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}
