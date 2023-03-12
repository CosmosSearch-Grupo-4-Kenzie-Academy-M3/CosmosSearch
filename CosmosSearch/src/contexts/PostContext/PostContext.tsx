import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { IFormPostRegister } from "../UserContext/@types_User";
import { IPost, IPostContext, IUpdatePost } from "./@typesPost";
import { LinksContext } from "../LinksContext/LinksContext";

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: iChildren) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchedPosts, setSearchedPosts] = useState<IPost[]>([]);
  const [actualPostId, setActualPostId] = useState(0);
  const [likeClicked, setLikeClicked] = useState(false);
  const [value, setValue] = useState<string | null>("");
  const [isDashboard, setIsDashboard] = useState(false);
  const { setMainComponent } = useContext(LinksContext);

  const getAllPosts = async () => {
    try {
      const response = await api.get(`/posts`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUserPosts = async (userId: number) => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    if (token) {
      try {
        const response = await api.get(`/users/${userId}/posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserPosts(response.data);
      } catch (error) {
        console.log("Erro, token expirado");
      }
    }
  };

  const getPostDate = () => {
    const methodDate = new Date();
    const day = methodDate.getDate();
    const mounth = methodDate.getMonth() + 1;
    const year = `${methodDate.getFullYear()}`.substring(2);
    const postDate = `${day}/${mounth}/${year}`;
    return postDate;
  };

  const createPost = async (data: IFormPostRegister) => {
    const userId = Number(localStorage.getItem("@CosmosSearch:USERID"));
    const name = localStorage.getItem("@CosmosSearch:USERNAME") as string;
    const date = getPostDate();
    const newData = { ...data, userId, name, date };
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    if (token) {
      try {
        const response = await api.post(`/posts`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(newData);
        setPosts([...posts, response.data]);
        toast.success("Post criado com sucesso!");
        setMainComponent("posts");
      } catch (error) {
        console.log(error);
        toast.error("Não foi possível criar porst.");
      }
    }
  };

  const deletePost = async (postId: number) => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    if (token) {
      try {
        await api.delete(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userId = Number(
          localStorage.getItem("@CosmosSearch:USERID") as string
        );
        getAllUserPosts(userId);
        getAllPosts();
        toast.success("Post deletado com sucesso!");
      } catch (error) {
        null;
        console.log(error);
        toast.error("Não foi possível excluir o post");
      }
    }
  };

  const editPost = async (postId: number, data: IUpdatePost) => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    const userId = localStorage.getItem("@CosmosSearch:USERID");
    const newData = { ...data, userId };
    try {
      await api.patch(`/posts/${postId}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllUserPosts(Number(userId));
      getAllPosts();
      toast.success("Post atualizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar posts!");
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        userPosts,
        getAllPosts,
        getAllUserPosts,
        createPost,
        deletePost,
        actualPostId,
        setActualPostId,
        likeClicked,
        setLikeClicked,
        editPost,
        setPosts,
        isSearch,
        searchedPosts,
        setIsSearch,
        setSearchedPosts,
        setValue,
        value,
        isDashboard,
        setIsDashboard,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
