import React from "react";
import { Box } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { user } = useUser();
  return (
    <Box>
      <h2>linkas visiem</h2>
      {user?.user_roles.includes("admin") && <h2>linkas admin</h2>}
    </Box>
  );
};

export default Navbar;
