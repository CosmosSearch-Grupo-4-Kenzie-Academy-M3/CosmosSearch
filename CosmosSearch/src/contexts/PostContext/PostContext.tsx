import { createContext, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { IFormPostRegister } from "../UserContext/@types_User";
import { IPost, IPostContext, IUpdatePost } from "./@typesPost";
import { LinksContext } from "../LinksContext/LinksContext";
import { UserContext } from "../UserContext/UserContext";

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: iChildren) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<IPost[]>([]);
  const [actualPostId, setActualPostId] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState<string | null>("");

  const { setMainComponent } = useContext(LinksContext);
  const { logout } = useContext(UserContext)

  const getAllPosts = async () => {
    try {
      const response = await api.get(`/posts`);
      const postsList: IPost[] = response.data;
      const postsListToUserLogged = postsList.map((post) => {
        return { ...post, postLiked: likeClicked };
      });
      setPosts(postsListToUserLogged);
    } catch (error) {
      toast.error("An error has occurred, plese login again.");
      logout();
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
        const postsList: IPost[] = response.data;
        setUserPosts(postsList);
      } catch (error) {
        toast.error("An error has occurred, plese login again.");
        logout();
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
        toast.success("Post successfully created");
        setMainComponent("posts");
      } catch (error) {
        toast.error("Unable to create post!");
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
        toast.success("Post successfully deleted");
      } catch (error) {
        toast.error("Unable to delete post!");
      }
    }
  };

  const resetSearchInUpdatePost = () => {
    setIsSearch(false); 
    setSearchOpen(false);
    setValue("");
  }

  const editPost = async (postId: number, data: IUpdatePost) => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    const userId = localStorage.getItem("@CosmosSearch:USERID");
    const newData = { ...data, userId, date: getPostDate() };
    try {
      await api.patch(`/posts/${postId}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllUserPosts(Number(userId));
      getAllPosts();
      toast.success("Post successfully updated");
      resetSearchInUpdatePost();
    } catch (error) {
      toast.error("Unable to update post!");
    }
  };

  const likePost = (postId: number) => {
    if (isSearch) {
      const postsWithLickedAlteration: IPost[] = searchedPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, postLiked: !post.postLiked };
        } else if (postId !== post.id) {
          return post;
        }
      }) as IPost[];
      setSearchedPosts(postsWithLickedAlteration);
      const actualizedPostsList = posts.map((post) => {
        const actualizedPost = postsWithLickedAlteration.find(
          (searchedPost) => {
            if (post.id === searchedPost.id) {
              return searchedPost;
            }
          }
        );
        if (actualizedPost) {
          return actualizedPost;
        } else {
          return post;
        }
      });
      setPosts(actualizedPostsList);
    } else {
      const postsWithLickedAlteration: IPost[] = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, postLiked: !post.postLiked };
        } else if (postId !== post.id) {
          return post;
        }
      }) as IPost[];
      setPosts(postsWithLickedAlteration);
    }
  };

  const searchFunction = (post: IPost) => {
    setIsSearch(true);
    const searchString = value?.toLowerCase() as string;
    const title = post.title.toLowerCase();
    const topic = post.topic.toLowerCase();
    const body = post.body.toLowerCase();
    const name = post.name.toLowerCase();
    const date = post.date;
    if (
      title.includes(searchString) ||
      topic.includes(searchString) ||
      body.includes(searchString) ||
      name.includes(searchString) ||
      date.includes(searchString)
    ) {
      return post;
    }
  };

  const resetSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setIsSearch(false); 
    setSearchOpen(false);
    setValue("");
  }

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
        searchFunction,
        likePost,
        searchOpen,
        setSearchOpen,
        resetSearch
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
