export interface IformUserRegister {
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
