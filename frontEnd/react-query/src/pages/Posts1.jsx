import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { data } from "../data/data";

function getPosts() {
  return data.posts;
}

const Posts1 = () => {
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  if (postsQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }
  return (
    <>
      <div>
        {postsQuery.data.map((post) => (
          <div key={post.id}> {post.title}</div>
        ))}
      </div>
    </>
  );
};

export default Posts1;
