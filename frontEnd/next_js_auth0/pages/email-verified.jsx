import React, { useEffect, useState } from "react";
import { Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

const emailVerified = () => {
  const {
    query: { updateSession },
    push,
  } = useRouter();
  const [refreshed, setRefreshed] = useState(false);
  useEffect(() => {
    if (updateSession === "true") {
      axios.get("/api/refreshToken").then((data) => {
        if (data) {
          setRefreshed(true);
        }
      });
    }
  }, [updateSession]);
  return (
    <div>
      <Heading>Your email has been verified</Heading>

      {refreshed && <Button onClick={() => push("/")}>Go to home</Button>}
    </div>
  );
};

export default emailVerified;
