import { useContext } from "react";

import { toast } from "react-toastify";

import { NewPostStyled } from "./NewPostStyled";

import { UserContext } from "../../../contexts/UserContext/UserContext";

export const NewPost = () => {
  const { redirectToNewPost, userState } = useContext(UserContext);

  const newPostFunctionality = () => {
      redirectToNewPost();
  };

  return (
    <NewPostStyled onClick={() => newPostFunctionality()}>
      + New Post
    </NewPostStyled>
  );
};
