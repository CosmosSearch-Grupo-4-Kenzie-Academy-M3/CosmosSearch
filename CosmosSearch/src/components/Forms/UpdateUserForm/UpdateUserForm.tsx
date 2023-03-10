import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext/UserContext";

import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { UpdateUserFormStyled } from "./UpdateUserFormStyled";

import { IFormUserUpdate } from "../../../contexts/UserContext/@types_User";
import { userUpdateSchema } from "../../../contexts/UserContext/validation";

export const UpdateUserForm = () => {

  const {patchProfile} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUserUpdate>({
    resolver: yupResolver(userUpdateSchema),
  });

  const userUpdateSubmit: SubmitHandler<IFormUserUpdate> = (data) => {

    patchProfile(data);

  };


  return (
    <UpdateUserFormStyled onSubmit={handleSubmit(userUpdateSubmit)}>
      <Input
        placeholder="Type your name"
        error={errors.name?.message}
        register={register("name")}
        type="text"
        labelName="Name"
      />
      <Input
        placeholder="Type your email"
        error={errors.email?.message}
        register={register("email")}
        type="email"
        labelName="Email"
      />
      <Input
        placeholder="Type your password"
        error={errors.password?.message}
        register={register("password")}
        type="password"
        labelName="Password"
      />
      <ButtonStyled
        type="submit"
        borderColor={"var(--primary-blue)"}
        textColor="var(--primary-blue)"
      >
        Register
      </ButtonStyled>
    </UpdateUserFormStyled>
  );
};
