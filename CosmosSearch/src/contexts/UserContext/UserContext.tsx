import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { IFormUserLogin, IFormUserRegister, IUserContext } from "./@types_User";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormUserLogin>();

  const userRegister = async (data: IFormUserRegister) => {
    try {
      const response = await api.post("/users", data);
      console.log(response);
      localStorage.setItem("@CosmosSearchTOKEN", response.data.accessToken);
      navigate("/DashBoard");
    } catch (error) {
      console.log(error);
      toast.error("Por favor revise seus dados.");
    }
  };

  const userLogin = async (data: IFormUserLogin) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@CosmosSearchTOKEN", response.data.accessToken);
      navigate("/UserDashboard");
    } catch (error) {
      toast.error("Usuário ou Senha inválidos.");
      reset();
    }
  };

  const logout = () => {
    localStorage.removeItem("@CosmosSearchTOKEN");
    navigate("/");
  };

  
  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        register,
        handleSubmit,
        errors,
        reset,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
