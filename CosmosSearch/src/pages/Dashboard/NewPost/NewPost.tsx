import { useContext } from "react";

import { NewPostStyled } from "./NewPostStyled";

import { UserContext } from "../../../contexts/UserContext/UserContext";

export const NewPost = () => {
  const { redirectToNewPost } = useContext(UserContext);

  return (
    <NewPostStyled onClick={() => redirectToNewPost()}>
      + New Post
    </NewPostStyled>
  );
};
