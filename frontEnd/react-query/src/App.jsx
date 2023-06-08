import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Posts1 from "./pages/Posts1";
import Posts2 from "./pages/Posts2";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];


function getPosts(){
  return POSTS
}

function App() {
  // const queryClient = useQueryClient();
  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => getPosts()
  //   //queryFn: () => wait(1000).then(() => [...POSTS]),
  //   // staleTime: 1000 // same as staleTime in main.jsx, just for this specific query.
  // });

  // if (postsQuery.isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (postsQuery.isError) {
  //   return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  // }
  const [currentPage, setCurrentPage] = useState(<Posts1/>)
  return (
    <>
      {/* <div>
        {postsQuery.data.map((post) => (
          <div key={post.id}> {post.title}</div>
        ))}
      </div> */}
      <button onClick={() => setCurrentPage(<Posts1 />)}>Posts 1</button>
      <button onClick={() => setCurrentPage(<Posts2 />)}>Posts 2</button>
      <button onClick={() => setCurrentPage(<Post id={1} />)}>First post</button>
      <button onClick={() => setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)}>Create post</button>
      <br/>
      {currentPage}
    </>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
