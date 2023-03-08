import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext/UserContext"
import { NewPostStyled } from "./NewPostStyled"

export const NewPost = () => {
  const { redirectToNewPost} = useContext(UserContext);

  return (
    <NewPostStyled onClick={() => redirectToNewPost()}>
        + New Post
    </NewPostStyled>
  )
}
