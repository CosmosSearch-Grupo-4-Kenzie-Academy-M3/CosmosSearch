import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { LoginFormStyled } from "./LoginFormStyled";

import { IFormUserLogin } from "../../../contexts/UserContext/@types_User";
import { UserContext } from "../../../contexts/UserContext/UserContext";

export const LoginForm = () => {
  const { userLogin, register, errors, handleSubmit } = useContext(UserContext);

  const userLoginSubmit: SubmitHandler<IFormUserLogin> = async (data) => {
    userLogin(data);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit(userLoginSubmit)}>
      <Input
        placeholder="Type your email"
        error={errors.email?.message}
        register={register("email")}
        type="text"
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
        Login
      </ButtonStyled>
    </LoginFormStyled>
  );
};
