import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IFormUserLogin } from "../../../contexts/UserContext/@types_User";
import { api } from "../../../services/api";
import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { UpdateUserFormStyled } from "../UpdateUserForm/UpdateUserFormStyled";
import { LoginFormStyled } from "./LoginFormStyled";

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormUserLogin>();

  const userLoginSubmit: SubmitHandler<IFormUserLogin> = async (data) => {
    userLogin(data);
  };

  const userLogin = async (data: IFormUserLogin) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@CosmosSearchTOKEN", response.data.accessToken);
      navigate("/UserDashboard");
    } catch (error) {
      toast.error(`Usuário ou Senha inválidos`);
      reset();
    }
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
