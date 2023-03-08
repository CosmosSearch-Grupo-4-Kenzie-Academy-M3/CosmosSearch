import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { RegisterUserFormStyled } from "./RegisterUserFormStyled";

import { fromSchema } from "../../../contexts/UserContext/validation";
import { IformUserRegister } from "../../../contexts/UserContext/@types_User";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export const RegisterUserForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformUserRegister>({
    resolver: yupResolver(fromSchema),
  });


  const navigate = useNavigate()

  const userRegister = async (data: IformUserRegister) => {

    

    try {
  
      const request = await api.post("/users" , data)
  
      console.log(request)
      navigate("/DashBoard")
      


    } catch (error) {
    
      console.log(error) 
    }

    
  
  }

  const userRegisterSubmit: SubmitHandler<IformUserRegister> = (data) => {
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
