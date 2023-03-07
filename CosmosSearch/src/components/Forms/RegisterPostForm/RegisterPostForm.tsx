import { useForm } from "react-hook-form";

import { SubmitHandler } from "react-hook-form";

import { IFormPostRegister } from "../../../contexts/UserContext/@types_User";

import { Input } from "../../Input/Input";
import { ButtonStyled } from "../../Button/ButtonStyled";
import { UpdateUserFormStyled } from "../UpdateUserForm/UpdateUserFormStyled";
import { Textarea } from "../../Input/Textarea/Textarea";

export const RegisterPostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormPostRegister>();

  const userPostSubmit: SubmitHandler<IFormPostRegister> = (data) => {
    console.log(data);
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
        error={errors.content?.message}
        register={register("content")}
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
