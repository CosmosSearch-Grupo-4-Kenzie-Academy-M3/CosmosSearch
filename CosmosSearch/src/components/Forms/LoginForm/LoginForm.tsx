import { SubmitHandler, useForm } from "react-hook-form";
import { IFormUserLogin } from "../../../contexts/UserContext/@types_User";
import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { UpdateUserFormStyled } from "../UpdateUserForm/UpdateUserFormStyled";
import { LoginFormStyled } from "./LoginFormStyled";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUserLogin>();

  const userLoginSubmit: SubmitHandler<IFormUserLogin> = (data) => {
    console.log(data);
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
