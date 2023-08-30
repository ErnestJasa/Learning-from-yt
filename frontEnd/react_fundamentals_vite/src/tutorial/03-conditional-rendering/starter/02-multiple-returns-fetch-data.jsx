import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
        }
        const user = await response.json();
        //console.log(user);
        setUser(user);
      } catch (e) {
        setIsError(true);
        console.log(e);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an arror</h2>;
  }

  const { avatar_url, name, bio, company } = user; // destructuring
  return (
    <div>
      <h2>Fetch Data </h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
