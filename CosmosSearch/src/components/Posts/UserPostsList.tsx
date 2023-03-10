import { useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";
import { IUser } from "../../contexts/UserContext/@types_User";

export const UserPosts = () => {
  const { userPosts , getAllUserPosts} = useContext(PostContext);

  useEffect(() => {
   const userId = Number(localStorage.getItem("@CosmosSearch:USERID") as string)
    getAllUserPosts(userId)
  }, [])
  
  return (
    <PostListStyled className="container__pages">
      {userPosts.map((post) => (
        <Post
          key={post.id}
          body={post.body}
          name={post.name}
          topic={post.topic}
          postId={post.id}
          title={post.title}
        />
      ))}
    </PostListStyled>
  );
};
