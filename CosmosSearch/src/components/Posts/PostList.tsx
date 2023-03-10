import { useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";

export const Posts = () => {
  const { posts, getAllPosts } = useContext(PostContext);

  useEffect(() => {
    getAllPosts();
  }, [posts]);

  return (
    <PostListStyled className="container__pages">
      {posts.map((post) => (
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
