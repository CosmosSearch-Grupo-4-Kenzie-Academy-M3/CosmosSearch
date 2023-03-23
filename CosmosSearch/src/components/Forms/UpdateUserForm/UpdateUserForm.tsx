import { useContext } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { userUpdateSchema } from "../../../contexts/UserContext/validation";

import { ButtonStyled } from "../../Button/ButtonStyled";
import { Input } from "../../Input/Input";
import { UpdateUserFormStyled } from "./UpdateUserFormStyled";

import { IFormUserUpdate } from "../../../contexts/UserContext/@types_User";
import { UserContext } from "../../../contexts/UserContext/UserContext";

export const UpdateUserForm = () => {
  const { patchProfile, userInfos } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormUserUpdate>({
    resolver: yupResolver(userUpdateSchema),
  });

  const userUpdateSubmit: SubmitHandler<IFormUserUpdate> = (data) => {
    if (data.name === "" && data.email === "") {
      data.name = userName as string;
      data.email = userEmail as string;
      patchProfile(data);
      reset();
    } else if (data.name === "" && data.email !== "") {
      data.name = userName as string;
      patchProfile(data);
      reset();
    } else if (data.email === "" && data.name !== "") {
      data.email = userEmail as string;
      patchProfile(data);
      reset();
    } else {
      patchProfile(data);
      reset();
    }
  };

  const userEmail = userInfos?.email;
  const userName = userInfos?.name;

  return (
    <UpdateUserFormStyled onSubmit={handleSubmit(userUpdateSubmit)}>
      <Input
        placeholder={userName as string}
        error={errors.name?.message}
        register={register("name")}
        type="text"
        labelName="Name"
      />
      <Input
        placeholder={userEmail as string}
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
