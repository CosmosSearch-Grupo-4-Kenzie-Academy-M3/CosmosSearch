import { createContext, useContext, useState } from "react";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { LinksContext } from "../LinksContext/LinksContext";
import { PostContext } from "../PostContext/PostContext";
import {
  IFormUserLogin,
  IFormUserRegister,
  IUserContext,
  IUser,
  IPatchProfile,
  IUserInfos,
} from "./@types_User";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const { setMainComponent } = useContext(LinksContext);
  const { getAllLikes } = useContext(PostContext)

  const [userState, setUserState] = useState<
    "userLoggedInPerfil" | "userLogged" | "userDeslogged"
  >("userDeslogged");
  const [user, setUser] = useState<IUser | string | null>(null);
  const [userInfos, setUserInfos] = useState<IUserInfos | null>(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormUserLogin>();

  const userRegister = async (data: IFormUserRegister) => {
    try {
      const fullDataToRegister = {...data, postLikeds: []}
      const response = await api.post("/users", fullDataToRegister);
      localStorage.setItem("@CosmosSearch:TOKEN", response.data.accessToken);
      localStorage.setItem("@CosmosSearch:USERID", response.data.user.id);
      localStorage.setItem("@CosmosSearch:USERNAME", response.data.user.name);
      localStorage.setItem("@CosmosSearch:EMAIL", response.data.user.email);
      localStorage.setItem("@CosmosSearch:USERSTATE", "userLogged");
      setUserState("userLogged");
      setUser(response.data.user);
      const { name, email, postLikeds } = response.data.user;
      const userInfosData = { name, email, postLikeds };
      console.log(userInfosData)
      setUserInfos(userInfosData);
      localStorage.setItem(
        "@CosmosSearch:USERINFOS",
        JSON.stringify(userInfosData)
      );
      try {
        const responseLikes = await api.get("/likes", {
          headers: {
            Authorization: `Bearer ${response.data.acessToken}`,
          },
        });
        localStorage.setItem(
          "@CosmosSearch:LIKELIST",
          JSON.stringify(responseLikes.data)
        );
      } catch (error) {
        console.log(error);
        toast.error("Erro na get all likes");
      }
      navigate("/dashboard");
      toast.success("User registered successfully!");
    } catch (error) {
      console.log(error)
      toast.error("Please review your data.");
    }
  };

  const userLogin = async (data: IFormUserLogin) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@CosmosSearch:TOKEN", response.data.accessToken);
      localStorage.setItem("@CosmosSearch:USERID", response.data.user.id);
      localStorage.setItem("@CosmosSearch:USERNAME", response.data.user.name);
      localStorage.setItem("@CosmosSearch:EMAIL", response.data.user.email);
      localStorage.setItem("@CosmosSearch:USERSTATE", "userLogged");
      setUserState("userLogged");
      setUser(response.data.user);
      const { name, email, postLikeds } = response.data.user;
      const userInfosData = { name, email, postLikeds };
      setUserInfos(userInfosData);
      localStorage.setItem(
        "@CosmosSearch:USERINFOS",
        JSON.stringify(userInfosData)
        );
        try {
          const responseLikes = await api.get("/likes", {
            headers: {
              Authorization: `Bearer ${response.data.acessToken}`,
            },
          });
          localStorage.setItem(
            "@CosmosSearch:LIKELIST",
            JSON.stringify(responseLikes.data)
          );
        } catch (error) {
          console.log(error);
          toast.error("Erro na get all likes");
        }
        toast.success("Login efetuado!");
        navigate("/dashboard");
    } catch (error) {
      console.log(error)
      toast.error("Usuário ou Senha inválidos.");
      reset();
    }
  };

  const logout = () => {
    localStorage.removeItem("@CosmosSearch:TOKEN");
    localStorage.removeItem("@CosmosSearch:USERSTATE");
    localStorage.clear()
    setUserState("userDeslogged");
    setUser(null);
    navigate("/");
    toast("Usuário deslogado!");
  };

  const redirectToNewPost = () => {
    setMainComponent("registerPost");
    navigate("/userdashboard");
  };

  const patchProfile = async (data: IPatchProfile) => {
    const id = Number(localStorage.getItem("@CosmosSearch:USERID"));
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    try {
      const response = await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: ` Bearer ${token} `,
        },
      });
      toast.success("Perfil atualizado com sucesso.");
      const userInfosData = {
        name: response.data.name,
        email: response.data.email,
        postLikeds: response.data.postLikeds,
      } as IUserInfos
      setUserInfos(userInfosData);
      localStorage.setItem(
        "@CosmosSearch:USERINFOS",
        JSON.stringify(userInfosData)
      );
    } catch (error) {
      console.log(error)
      toast.error("Please review your data.");
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
        patchProfile,
        userInfos,
        setUserInfos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
