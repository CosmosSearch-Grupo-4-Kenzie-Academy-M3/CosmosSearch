import { useContext } from "react";
import { LinksContext } from "../../../../contexts/LinksContext/LinksContext";
import { PostContext } from "../../../../contexts/PostContext/PostContext";
import { CloseModal } from "../../../Svgs/Svg";
import { CloseButton } from "../PostModalStyled";
import {
  PostDeleteButtonStyled,
  PostDeleteDivStyled,
  PostDeleteStyled,
} from "./PostDeleteStyled";

export const PostDelete = () => {
  const { setDeleteModalIsOpen } = useContext(LinksContext);
  const { actualPostId, deletePost } = useContext(PostContext);

  const deleteFunction = (id: number) => {
    deletePost(id);
    setDeleteModalIsOpen(false);
  };

  return (
    <PostDeleteDivStyled>
      <PostDeleteStyled>
        <CloseButton onClick={() => setDeleteModalIsOpen(false)}>
          <CloseModal />
        </CloseButton>
        <p className="title__posts">DELETE POST?</p>
        <PostDeleteButtonStyled onClick={() => deleteFunction(actualPostId)}>
          DELETE
        </PostDeleteButtonStyled>
      </PostDeleteStyled>
    </PostDeleteDivStyled>
  );
};
