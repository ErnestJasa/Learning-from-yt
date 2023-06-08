import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { data } from "../data/data";
import Post from "./Post";
function createPost(post){    
    data.posts.push(post)
}

const CreatePost = ({setCurrentPage}) => {
    const titleRef = useRef()
    const bodyRef = useRef()
    const queryClient =useQueryClient()
    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: data =>{       // should return data but doesnt work for w.e reason
            console.log(data)
            queryClient.setQueryData(["posts", data.id], data)
            queryClient.invalidateQueries(["posts"], { exact: true})
            //setCurrentPage(<Post id={data.id}/>)
        }
    })

    //console.log(createPostMutation.isSuccess)
    const handleSubmit = (e) =>{
        e.preventDefault();
        createPostMutation.mutate({
          title: titleRef.current.value,
          body: bodyRef.current.value,
          id: 1564,
          userId: 1,
        });
    }
  return (
    <div>
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      <h1>Create post</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
            <label htmlFor="body">Body</label>
            <input type="text" id="body" ref={bodyRef} />
        </div>
        <button disabled={createPostMutation.IsLoading}>
            {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
