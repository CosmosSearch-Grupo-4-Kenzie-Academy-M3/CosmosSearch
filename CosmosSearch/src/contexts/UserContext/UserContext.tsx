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
  IUserFromApi,
} from "./@types_User";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const { setMainComponent } = useContext(LinksContext);
  const { posts, editUserNameInPost} = useContext(PostContext)

  const [userState, setUserState] = useState<
    "userLoggedInPerfil" | "userLogged" | "userDeslogged"
  >("userDeslogged");
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUserFromApi[]>([])
  const [userInfos, setUserInfos] = useState<IUserInfos | null>(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormUserLogin>();

  const getAllUsers = async () => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token
    try {
      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const allUsers: IUserFromApi[] = response.data
      const users = allUsers.map((user) => {
       const {name, email, id, postLikeds} = user 
       return {name, email, id, postLikeds}
      })
      setUsers(users)
    } catch (error) {
      toast("erro no get all users")
      console.log(error)
    }
  }

  const userRegister = async (data: IFormUserRegister) => {
    const fullDataToRegister = { ...data, postLikeds: [] };
    try {
      const response = await api.post("/users", fullDataToRegister);
      const newUserRegistered = response.data.user;
      const token = response.data.accessToken;
      const userInfosData = { ...newUserRegistered, token, currentUserState: "userLogged" };
      setUser(newUserRegistered);
      localStorage.setItem(
        "@CosmosSearch:USERINFOS",
        JSON.stringify(userInfosData)
      );
      setUserState("userLogged");
      setUserInfos(userInfosData);
      navigate("/dashboard");
      toast.success("User registered successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Please review your data.");
    }
  };

  const userLogin = async (data: IFormUserLogin) => {
    try {
      const response = await api.post("/login", data);
      const userLogged = response.data.user;
      const token = response.data.accessToken;
      const userInfosData = { ...userLogged , token, currentUserState: "userLogged" };
      setUser(userLogged)
      localStorage.setItem(
        "@CosmosSearch:USERINFOS",
        JSON.stringify(userInfosData)
      );
      setUserInfos(userInfosData);
      setUserState("userLogged");
      toast.success("Login efetuado!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Invalid user or password.");
    }
  };

  const logout = () => {
    localStorage.removeItem("@CosmosSearch:USERINFOS");
    setUserState("userDeslogged");
    setUser(null);
    navigate("/");
    toast("User deslogged!");
  };

  const redirectToNewPost = () => {
    setMainComponent("registerPost");
    navigate("/userdashboard");
  };

  const patchProfile = async (data: IPatchProfile) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const id = userInfos.id
    const token = userInfos.token
    try {
      const response = await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: ` Bearer ${token} `,
        },
      });
      const newUserInfos = response.data
      toast.success("Perfil atualizado com sucesso.");
      const userInfosData = {
        ...userInfos,
        name: newUserInfos.name,
        email: newUserInfos.email,
        postLikeds: newUserInfos.postLikeds,
      } as IUserInfos;
      setUserInfos(userInfosData);
      localStorage.setItem(
        "@CosmosSearch:USERINFOS",
        JSON.stringify(userInfosData)
      );
      const newName = newUserInfos.name
      editUserNameInPost(newName)
    } catch (error) {
      console.log(error);
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
        users,
        setUsers,
        getAllUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
