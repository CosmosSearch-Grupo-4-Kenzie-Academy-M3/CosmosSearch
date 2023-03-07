import { useForm, SubmitHandler } from "react-hook-form";

import { IFormUserUpdate } from "../../../contexts/UserContext/@types_User";
import { userUpdateSchema } from "../../../contexts/UserContext/validation";

import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { RegisterUserFormStyled } from "../RegisterUserForm/RegisterUserFormStyled";
import {
  UpdateUserFormStyled,
} from "./UpdateUserFormStyled";

export const UpdateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUserUpdate>({
    resolver: yupResolver(userUpdateSchema),
  });

  const userUpdateSubmit: SubmitHandler<IFormUserUpdate> = (data) => {
    console.log(data);
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
