import { useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";

export const Posts = () => {
  const { posts, getAllPosts, isSearch, setIsSearch, searchedPosts, getAllLikes } =
    useContext(PostContext);

  useEffect(() => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN") as string
    setIsSearch(false);
    // getAllLikes(token);
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
              qntOfLikes={post.qntOfLikes}
              likeId={post.likeId}
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
            qntOfLikes={post.qntOfLikes}
            likeId={post.likeId}
          />
        ))
      )}
    </PostListStyled>
  );
};
