import { ReactNode, useContext, useEffect } from "react";

import { Post } from "./Post/Post";
import { PostListStyled } from "./PostListStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const Posts = () => {
  const {
    posts,
    isSearch,
    setIsSearch,
    searchedPosts,
    getAllPosts,
    mapPostsListInRelationWithPostsUsersOwners,
  } = useContext(PostContext);

  const { userState, userInfos } = useContext(UserContext);

  const userId = userInfos?.id;

  useEffect(() => {
    setIsSearch(false);
    getAllPosts();
    console.log("ok");
  }, []);

  return (
    <PostListStyled className="container__pages">
      {isSearch ? (
        searchedPosts.length === 0 ? (
          <p className="error">Search return any results</p>
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
      ) : userState === "userLoggedInPerfil" ? (
        (mapPostsListInRelationWithPostsUsersOwners(posts).map((post) => {
          if (post.userId === userId) {
           return <Post
              key={post.id}
              body={post.body}
              name={post.name}
              topic={post.topic}
              postId={post.id}
              title={post.title}
              date={post.date}
              postLiked={post.postLiked}
              likes={post.likes}
            />;
          } else {
            null;
          }
        }) as ReactNode)
      ) : (
        mapPostsListInRelationWithPostsUsersOwners(posts).map((post) => (
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
