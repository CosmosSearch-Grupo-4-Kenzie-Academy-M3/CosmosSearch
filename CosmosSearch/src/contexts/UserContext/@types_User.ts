import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormReset,
} from "react-hook-form";

export interface IFormUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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

export interface IPatchProfile {
  email: string;
  name: string;
  password: string;
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
  user: IUser | string | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | string | null>>;
  patchProfile: (data: IPatchProfile) => Promise<void>;
}
