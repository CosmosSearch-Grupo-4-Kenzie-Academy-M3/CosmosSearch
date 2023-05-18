import { useContext } from "react";

import { DivInput, NewCommentInput, NewCommentInputButton } from "../PostModalStyled";

import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { newCommentSchema } from "../../../../contexts/CommentsContext/validation";

import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";

import { INewComment } from "../../../../contexts/CommentsContext/@typesComments";

interface IEditCommentFormProps {
  id: number
  setEditInputOpen: React.Dispatch<React.SetStateAction<boolean>>
  setMenuEditCommentOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export const EditCommentForm = ({id, setEditInputOpen, setMenuEditCommentOpen}: IEditCommentFormProps) => {
  const { editComment, commentWasEdited, setCommentWasEdited } = useContext(CommentsContext)

  const {register, handleSubmit, formState: { errors } }= useForm<INewComment>({
    resolver: yupResolver(newCommentSchema)
  })

  const submit: SubmitHandler<INewComment> = (data) => {
    editComment(id, data);

    if (commentWasEdited) {
      setCommentWasEdited(false);
      setEditInputOpen(false);
      setMenuEditCommentOpen(false);
    }
  }

  return (
    <DivInput>
      <form onSubmit={handleSubmit(submit)}>
        <NewCommentInput
          height="25px"
          className="post__text__preview--mobile"
          type="text"
          {...register("text")}
        />
        <NewCommentInputButton className="title__comments">
          ENVIAR
        </NewCommentInputButton>
        {errors ? <span className="spanError">{errors.text?.message}</span> : <></>}
      </form>
    </DivInput>
  );
};
