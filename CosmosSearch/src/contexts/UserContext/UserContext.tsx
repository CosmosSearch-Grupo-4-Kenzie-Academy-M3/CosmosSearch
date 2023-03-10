import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { LinksContext } from "../LinksContext/LinksContext";
import {
  IFormUserLogin,
  IFormUserRegister,
  IUserContext,
  IUser,

  IPatchProfile,

} from "./@types_User";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const { setMainComponent } = useContext(LinksContext);

  const [userState, setUserState] = useState<
    "userLoggedInPerfil" | "userLogged" | "userDeslogged"
  >("userDeslogged");
  const [user, setUser] = useState<IUser | string | null>(null);

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
      localStorage.setItem("@CosmosSearch:TOKEN", response.data.accessToken);
      localStorage.setItem("@CosmosSearch:USERSTATE", "userLogged");
      localStorage.setItem("@CosmosSearch:USERID", response.data.user.id);
      localStorage.setItem("@CosmosSearch:USERNAME", response.data.user.name);
      setUser(response.data.user);
      navigate("/dashboard");
      console.log(response.data.user);
    } catch (error) {
      console.log(error);
      toast.error("Por favor revise seus dados.");
    }
  };

  const userLogin = async (data: IFormUserLogin) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@CosmosSearch:TOKEN", response.data.accessToken);
      localStorage.setItem("@CosmosSearch:USERSTATE", "userLogged");
      localStorage.setItem("@CosmosSearch:USERID", response.data.user.id);
      localStorage.setItem("@CosmosSearch:USERNAME", response.data.user.name);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário ou Senha inválidos.");
      reset();
    }
  };

  const logout = () => {
    localStorage.removeItem("@CosmosSearch:TOKEN");
    localStorage.removeItem("@CosmosSearch:USERSTATE");
    setUserState("userDeslogged");
    setUser(null);
    navigate("/");
  };

  const redirectToNewPost = () => {
    setMainComponent("registerPost");
    navigate("/userdashboard");
  };

  

  const patchProfile = async (data: IPatchProfile) => {

    const id = localStorage.getItem("@CosmosSearch:USERID")
    const token = localStorage.getItem("@CosmosSearch:TOKEN")

    try {

      const response = await api.patch(`/users/${id}`, data , {
        headers: {
          Authorization: ` Bearer ${token} `
        }
      
      });
       
      toast.success("Perfil atualizado com sucesso.");
      localStorage.setItem("@CosmosSearch:USERNAME", response.data.name);

    } catch (error) {
      console.log(error);
      toast.error("Por favor revise seus dados.");
    }
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
        redirectToNewPost,
        userState,
        setUserState,
        user,
        setUser,

        patchProfile
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
