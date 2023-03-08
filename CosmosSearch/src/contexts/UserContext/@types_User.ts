import { UseFormRegister, UseFormHandleSubmit, FieldErrors, UseFormReset } from "react-hook-form";

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
  content: string;
  topic: string;
}

export interface IFormUserLogin {
  email: string;
  password: string;
  error?: string;
}

export interface IUserContext {
  userRegister: (data: IFormUserRegister) => Promise<void>
  userLogin: (data: IFormUserLogin) => Promise<void>
  register: UseFormRegister<IFormUserLogin>;
  handleSubmit: UseFormHandleSubmit<IFormUserLogin>;
  errors: FieldErrors<IFormUserLogin>;
  reset: UseFormReset<IFormUserLogin>;
  logout: () => void;
  redirectToNewPost: () => void;
}
