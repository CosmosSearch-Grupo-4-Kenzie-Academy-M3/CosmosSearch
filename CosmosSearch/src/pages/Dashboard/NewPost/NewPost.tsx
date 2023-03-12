import { useContext } from "react";

import { NewPostStyled } from "./NewPostStyled";

import { UserContext } from "../../../contexts/UserContext/UserContext";
import { toast } from "react-toastify";

export const NewPost = () => {
  const { redirectToNewPost, userState } = useContext(UserContext);
 
  const newPostFunctionality = () => {
    if (userState === "userLogged") {
      redirectToNewPost()
    } else if (userState === "userDeslogged") {
      toast.error("Por favor, faça login.")
    }
  }
  return (
    <NewPostStyled onClick={() => newPostFunctionality()}>
      + New Post
    </NewPostStyled>
  ); 


};
