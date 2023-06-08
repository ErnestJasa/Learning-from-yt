import React from "react";
import { data } from "../data/data";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function getPost(id) {
  return data.posts.find((post) => post.id === id);
}
function getUser(id) {
  return data.users.find((user) => user.id === id);
}

const Post = ({ id }) => {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
  const userQuery = useQuery({
    queryKey: ["users", id],
    enabled: postQuery?.data?.userId != null, // will only enable this query when it meets requirements
    queryFn: () => getUser(postQuery?.data?.userId),
  });

  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }
  return (
    <>
      <h1>
        {postQuery.data.title}
        <small>
          {userQuery.isLoading
            ? "Loading user"
            : userQuery.isError
            ? "Error loading user"
            : userQuery.data.name}
        </small>
      </h1>
    </>
  );
};

export default Post;
