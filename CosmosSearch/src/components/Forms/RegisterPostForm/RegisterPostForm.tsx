import { useContext } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { newUserPost } from "../../../contexts/PostContext/validation";

import { Input } from "../../Input/Input";
import { ButtonStyled } from "../../Button/ButtonStyled";
import { UpdateUserFormStyled } from "../UpdateUserForm/UpdateUserFormStyled";
import { Textarea } from "../../Input/Textarea/Textarea";

import { PostContext } from "../../../contexts/PostContext/PostContext";
import { IFormPostRegister } from "../../../contexts/UserContext/@types_User";
import { yupResolver } from "@hookform/resolvers/yup";

export const RegisterPostForm = () => {
  const { createPost } = useContext(PostContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormPostRegister>({
    resolver: yupResolver(newUserPost)
  });

  const userPostSubmit: SubmitHandler<IFormPostRegister> = (data) => {
    createPost(data);
  };

  return (
    <UpdateUserFormStyled onSubmit={handleSubmit(userPostSubmit)}>
      <Input
        placeholder="Post title"
        error={errors.title?.message}
        register={register("title")}
        type="text"
        labelName="Title"
      />
      <Input
        placeholder="Post Topic"
        error={errors.topic?.message}
        register={register("topic")}
        type="text"
        labelName="Topic"
      />
      <Textarea
        error={errors.body?.message}
        register={register("body")}
        text="Post"
      />
      <ButtonStyled
        type="submit"
        borderColor={"var(--primary-blue)"}
        textColor="var(--primary-blue)"
      >
        Register Post
      </ButtonStyled>
    </UpdateUserFormStyled>
  );
};
