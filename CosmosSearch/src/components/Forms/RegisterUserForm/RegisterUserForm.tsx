import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { formmSchema } from "../../../contexts/UserContext/validation";

import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { RegisterUserFormStyled } from "./RegisterUserFormStyled";

import { useContext } from "react";
import { IFormUserRegister } from "../../../contexts/UserContext/@types_User";
import { UserContext } from "../../../contexts/UserContext/UserContext";

export const RegisterUserForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUserRegister>({
    resolver: yupResolver(formmSchema),
  });

  const userRegisterSubmit: SubmitHandler<IFormUserRegister> = (data) => {
    userRegister(data);
  };

  return (
    <RegisterUserFormStyled onSubmit={handleSubmit(userRegisterSubmit)}>
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
      <Input
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
        register={register("confirmPassword")}
        type="password"
        labelName="Confirm password"
      />
      <ButtonStyled
        type="submit"
        borderColor={"var(--primary-blue)"}
        textColor="var(--primary-blue)"
      >
        Register
      </ButtonStyled>
    </RegisterUserFormStyled>
  );
};
