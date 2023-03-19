import { useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";

export const UserPosts = () => {
  const {
    userPosts,
    isSearch,
    setIsSearch,
    searchedPosts,
    getAllPosts,
    mapPostsListInRelationWithPostsUsersOwners,
    posts
  } = useContext(PostContext);

  useEffect(() => {
    setIsSearch(false);
    getAllPosts();
  }, []);

  return (
    <PostListStyled className="container__pages">
      {isSearch ? (
        searchedPosts.length === 0 ? (
          <p className="error">Search return any results.</p>
        ) : (
          mapPostsListInRelationWithPostsUsersOwners(searchedPosts).map(
            (post) => (
              <Post
                key={post.id}
                body={post.body}
                name={post.name}
                topic={post.topic}
                postId={post.id}
                title={post.title}
                date={post.date}
                postLiked={post.postLiked}
                likes={post.likes}
              />
            )
          )
        )
      ) : userPosts.length === 0 ? (
        <p className="error">There's any posts yet.</p>
      ) : (
        mapPostsListInRelationWithPostsUsersOwners(userPosts).map((post) => (
          <Post
            key={post.id}
            body={post.body}
            name={post.name}
            topic={post.topic}
            postId={post.id}
            title={post.title}
            date={post.date}
            postLiked={post.postLiked}
            likes={post.likes}
          />
        ))
      )}
    </PostListStyled>
  );
};
