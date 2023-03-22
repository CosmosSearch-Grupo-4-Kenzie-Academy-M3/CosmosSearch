import { DivInput, NewCommentInput, NewCommentInputButton } from "../PostModalStyled";

export const EditCommentForm = () => {
  return (
    <DivInput>
      <form action="">
        <NewCommentInput
          height="25px"
          className="post__text__preview--mobile"
          type="text"
        />
        <NewCommentInputButton className="title__comments">
          ENVIAR
        </NewCommentInputButton>
      </form>
    </DivInput>
  );
};
