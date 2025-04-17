import React from "react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormReset,
} from "react-hook-form";

export interface IFormUserRegister {
  email: string;
  username: string;
  firstName:string;
  lastName:string;
  password: string;
  confirmpassword: string;
}

export interface IFormUserRegisterValidator {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}

export interface IFormUserUpdate {
  name: string;
  email: string;
  password: string;
}

export interface IFormPostRegister {
  title: string;
  body: string;
  topic: string;
  userId: number;
  name: string;
}

export interface IFormUserLogin {
  email: string;
  password: string;
  error?: string;
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface IUserFromApi {
  email: string;
  name: string;
  id: number;
  password?: string;
  confirmPassword?: string;
  postLikeds: number[]
}

export interface IPatchProfile {
  email: string;
  name: string;
  password: string;
}

export interface IUserInfos {
  name: string;
  email: string;
  id: number;
  token: string;
  postLikeds: number[];
  currentUserState: "userLoggedInPerfil" | "userLogged" | "userDeslogged";
}

export interface IUserContext {
  userRegister: (data: IFormUserRegister) => Promise<void>;
  userLogin: (data: IFormUserLogin) => Promise<void>;
  register: UseFormRegister<IFormUserLogin>;
  handleSubmit: UseFormHandleSubmit<IFormUserLogin>;
  errors: FieldErrors<IFormUserLogin>;
  reset: UseFormReset<IFormUserLogin>;
  logout: () => void;
  redirectToNewPost: () => void;
  userState: "userLoggedInPerfil" | "userLogged" | "userDeslogged";
  setUserState: React.Dispatch<
    React.SetStateAction<"userLoggedInPerfil" | "userLogged" | "userDeslogged">
  >;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  patchProfile: (data: IPatchProfile) => Promise<void>;
  userInfos: IUserInfos | null;
  setUserInfos: React.Dispatch<React.SetStateAction<IUserInfos | null>>;
  users: IUserFromApi[];
  setUsers: React.Dispatch<React.SetStateAction<IUserFromApi[]>>;
  getAllUsers: () => Promise<void>
}
