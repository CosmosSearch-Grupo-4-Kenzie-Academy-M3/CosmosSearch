import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "../../Input/Textarea/Textarea";
import { UpdatePostStyled } from "./UpdatePostStyled";

import { yupResolver } from "@hookform/resolvers/yup";
import { updatePostSchema } from "../../../contexts/PostContext/validation";
import { ButtonStyled } from "../../Button/ButtonStyled";
import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext/PostContext";
import { IUpdatePost } from "../../../contexts/PostContext/@typesPost";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";

export const UpdatePost = () => {
  const { editPost, actualPostId } = useContext(PostContext);
  const {setEditModalIsOpen} = useContext(LinksContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdatePost>({
    resolver: yupResolver(updatePostSchema),
  });

  const updateSubmit: SubmitHandler<IUpdatePost> = (data) => {
    editPost(actualPostId, data);
    setEditModalIsOpen(false)
  };

  return (
    <UpdatePostStyled onSubmit={handleSubmit(updateSubmit)}>
      <Textarea
        register={register("body")}
        error={errors.body?.message}
        width="100%"
      />
      <ButtonStyled
        borderColor="var(--primary-blue)"
        textColor="var(--primary-blue)"
        type="submit"
      >
        Send
      </ButtonStyled>
    </UpdatePostStyled>
  );
};
