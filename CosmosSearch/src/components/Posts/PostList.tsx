import { useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";

export const Posts = () => {
  const { posts, getAllPosts, isSearch, setIsSearch, searchedPosts } =
    useContext(PostContext);

  useEffect(() => {
    setIsSearch(false);
    getAllPosts();
  }, []);

  return (
    <PostListStyled className="container__pages">
      {isSearch ? (
        searchedPosts.length === 0 ? (
          <p className="error">Search return any results</p>
        ) : (
          searchedPosts.map((post) => (
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
          ))
        )
      ) : (
        posts.map((post) => (
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
        ))
      )}
    </PostListStyled>
  );
};
