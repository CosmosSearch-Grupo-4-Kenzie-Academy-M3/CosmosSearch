import { useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";

export const Posts = () => {
  const { posts, getAllPosts, isSearch, searchedPosts } = useContext(PostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostListStyled className="container__pages">
      {isSearch ? searchedPosts.map((post) => (
        <Post
          key={post.id}
          body={post.body}
          name={post.name}
          topic={post.topic}
          postId={post.id}
          title={post.title}
          date={post.date}
        />
      )) : posts.map((post) => (
        <Post
          key={post.id}
          body={post.body}
          name={post.name}
          topic={post.topic}
          postId={post.id}
          title={post.title}
          date={post.date}
        />
      ))} 
    </PostListStyled>
  );
};
