import { useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";

export const UserPosts = () => {
  const { userPosts, getAllUserPosts, isSearch, setIsSearch, searchedPosts } = useContext(PostContext);

  useEffect(() => {
    const userId = Number(
      localStorage.getItem("@CosmosSearch:USERID") as string
    );
    getAllUserPosts(userId);
    setIsSearch(false)
  }, []);

  return (
    <PostListStyled className="container__pages">
      {isSearch ? searchedPosts.length === 0 
      ? <p className="error">Search return any results</p>
      : searchedPosts.map((post) => (
        <Post
          key={post.id}
          body={post.body}
          name={post.name}
          topic={post.topic}
          postId={post.id}
          title={post.title}
          date={post.date}
          postLiked={post.postLiked}
        />
      )) : userPosts.map((post) => (
        <Post
          key={post.id}
          body={post.body}
          name={post.name}
          topic={post.topic}
          postId={post.id}
          title={post.title}
          date={post.date}
          postLiked={post.postLiked}
        />
      ))} 
    </PostListStyled>
  );
};
