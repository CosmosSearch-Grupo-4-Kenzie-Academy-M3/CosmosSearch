import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import {
  IFormPostRegister,
  IUserInfos,
} from "../UserContext/@types_User";
import { IPost, IPostContext, IUpdatePost } from "./@typesPost";
import { LinksContext } from "../LinksContext/LinksContext";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios";

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: iChildren) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<IPost[]>([]);
  const [actualPostId, setActualPostId] = useState(0);

  const [likeClicked, setLikeClicked] = useState(false);

  const [isDashboard, setIsDashboard] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState<string | null>("");

  const { setMainComponent } = useContext(LinksContext);
  const { logout, userState, setUserInfos, users } = useContext(UserContext);

  const orderPostsByData = (list: IPost[]) => {
    const orderedList = list.sort((postA, postB) => {
      let dateAInNumber =
        Number(postA.date.slice(0, 1)) +
        Number(postA.date.slice(3, 4)) +
        Number(postA.date.slice(6, 7));
      let dateBInNumber =
        Number(postB.date.slice(0, 1)) +
        Number(postB.date.slice(3, 4)) +
        Number(postB.date.slice(6, 7));
      const postAMonth = postA.date.slice(3, 4);
      const postBMonth = postA.date.slice(3, 4);
      switch (postAMonth) {
        case "02":
          dateAInNumber = dateAInNumber + 31;
          break;
        case "03":
          dateAInNumber = dateAInNumber + 31 * 2;
          break;
        case "04":
          dateAInNumber = dateAInNumber + 31 * 3;
          break;
        case "05":
          dateAInNumber = dateAInNumber + 31 * 4;
          break;
        case "06":
          dateAInNumber = dateAInNumber + 31 * 5;
          break;
        case "07":
          dateAInNumber = dateAInNumber + 31 * 6;
          break;
        case "08":
          dateAInNumber = dateAInNumber + 31 * 7;
          break;
        case "09":
          dateAInNumber = dateAInNumber + 31 * 8;
          break;
        case "10":
          dateAInNumber = dateAInNumber + 31 * 9;
          break;
        case "11":
          dateAInNumber = dateAInNumber + 31 * 10;
          break;
        case "12":
          dateAInNumber = dateAInNumber + 31 * 11;
          break;
      }
      switch (postBMonth) {
        case "02":
          dateBInNumber = dateBInNumber + 31;
          break;
        case "03":
          dateBInNumber = dateBInNumber + 31 * 2;
          break;
        case "04":
          dateBInNumber = dateBInNumber + 31 * 3;
          break;
        case "05":
          dateBInNumber = dateBInNumber + 31 * 4;
          break;
        case "06":
          dateBInNumber = dateBInNumber + 31 * 5;
          break;
        case "07":
          dateBInNumber = dateBInNumber + 31 * 6;
          break;
        case "08":
          dateBInNumber = dateBInNumber + 31 * 7;
          break;
        case "09":
          dateBInNumber = dateBInNumber + 31 * 8;
          break;
        case "10":
          dateBInNumber = dateBInNumber + 31 * 9;
          break;
        case "11":
          dateBInNumber = dateBInNumber + 31 * 10;
          break;
        case "12":
          dateBInNumber = dateBInNumber + 31 * 11;
          break;
      }
      if (dateAInNumber > dateBInNumber) {
        return 1;
      } else if (dateAInNumber < dateBInNumber) {
        return -1;
      } else {
        return 0;
      }
    });
    return orderedList;
  };

  const getAllPosts = async () => {
    try {
      const response = await api.get(`/posts`);
      const postsList: IPost[] = response.data;
      const postsListToUserLogged: IPost[] = postsList.map((post) => {
        return { ...post, postLiked: likeClicked };
      });
      if (userState !== "userDeslogged") {
        const userInfos = JSON.parse(
          localStorage.getItem("@CosmosSearch:USERINFOS") as string
        ) as IUserInfos;
        const userId = userInfos.id;
        const postListToUserLoggedWithLickedPosts: IPost[] =
          postsListToUserLogged.map((post) => {
            const postLiked = userInfos.postLikeds.find((id) => post.id === id);
            if (postLiked) {
              return {
                ...post,
                postLiked: true,
              };
            } else if (!postLiked) {
              return post;
            }
          }) as IPost[];
        const orderedList = orderPostsByData(
          postListToUserLoggedWithLickedPosts
        );
        setPosts(orderedList);
      } else if (userState === "userDeslogged") {
        const orderedList = orderPostsByData(postsListToUserLogged);
        setPosts(orderedList);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          logout();
          toast.error("An error occurred, please login again.");
        } else if (error.response?.config.timeout === 10000) {
          logout();
          toast.error("An error occurred, please login again.");
        }
      }
      toast.error("erro no post list.");
    }
  };

  const mapPostsListInRelationWithPostsUsersOwners = (list: IPost[]) => {
    const postsListsWithCorrectUsersOwnersNames = list.map((post) => {
      const userOwner = users.find((user) => post.userId === user.id);
      if (userOwner) {
        return {
          ...post,
          name: userOwner.name,
        };
      } else {
        return post;
      }
    });
    return postsListsWithCorrectUsersOwnersNames;
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
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const userId = userInfos.id;
    const name = userInfos.name;
    const token = userInfos.token;
    const likes = 0
    const date = getPostDate();
    const newData = { ...data, userId, name, date, likes };
    if (token) {
      try {
        const response = await api.post(`/posts`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const newPost = { ...response.data, postLiked: false };
        const newPostList = [...posts, newPost]
        const orderedList = orderPostsByData(newPostList)
        setPosts(orderedList)
        setMainComponent("posts");
        toast.success("Post successfully created")
      } catch (error) {
        console.log(error);
        toast.error("Unable to create post!");
      }
    }
  };

  const deletePost = async (postId: number) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token;
    if (token) {
      try {
        await api.delete(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const postsListFiltered = posts.filter((post) => post.id !== postId)
        const orderedList = orderPostsByData(postsListFiltered)
        setPosts(orderedList)
        toast.success("Post successfully deleted");
      } catch (error) {
        console.log(error);
        toast.error("Unable to delete post!");
      }
    }
  };

  const resetSearchInUpdatePost = () => {
    setIsSearch(false);
    setSearchOpen(false);
    setValue("");
  };

  const editPost = async (postId: number, data: IUpdatePost) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token;
    const userId = userInfos.id;
    const newData = { ...data, userId, date: getPostDate() };
    try {
      const response = await api.patch(`/posts/${postId}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newPost = response.data
      const filteredPostList = posts.filter(post => post.id !== postId)
      const newPostList = [...filteredPostList, newPost]
      const orderedList = orderPostsByData(newPostList)
      setPosts(orderedList)
      toast.success("Post successfully updated");
      resetSearchInUpdatePost();
    } catch (error) {
      toast.error("Unable to update post!");
    }
  };

  const actualizePostLikedsUserArray = async (
    postId: number,
    postLiked: boolean,
    token: string,
    userId: number,
    userInfos: IUserInfos
  ) => {
    const postLikeds = postLiked
      ? userInfos.postLikeds.filter((id) => id !== postId)
      : [...userInfos.postLikeds, postId];
    try {
      const response = await api.patch(
        `users/${userId}`,
        {
          postLikeds: postLikeds,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newPostLikeds: number[] = response.data.postLikeds;
      const newUserInfos = { ...userInfos, postLikeds: newPostLikeds };
      setUserInfos(newUserInfos);
      localStorage.setItem(
        "@CosmosSearch:USERINFOS",
        JSON.stringify(newUserInfos)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const alterLikeCount = async (
    likes: number,
    postId: number,
    postLiked: boolean
  ) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token;
    const userId = userInfos.id;
    const likeData = postLiked ? likes - 1 : likes + 1;
    try {
      const response = await api.patch(
        `posts/${postId}`,
        {
          likes: likeData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      actualizePostLikedsUserArray(postId, postLiked, token, userId, userInfos);
      if (isSearch) {
        const postListActualizedWithPostLiked = searchedPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              postLiked: !post.postLiked,
              likes: likeData,
            };
          } else if (post.id !== postId) {
            return post;
          }
        }) as IPost[];
        const orderedList = orderPostsByData(postListActualizedWithPostLiked);
        setSearchedPosts(orderedList);
      } else {
        const postListActualizedWithPostLiked = posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              postLiked: !post.postLiked,
              likes: likeData,
            };
          } else if (post.id !== postId) {
            return post;
          }
        }) as IPost[];
        const orderedList = orderPostsByData(postListActualizedWithPostLiked);
        const userOrderedList = orderedList.filter(
          (post) => post.userId === userId
        );
        setPosts(orderedList);
      }
    } catch (error) {
      console.log(error);
      toast("erro no alterlikecount");
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
    setPosts([]);
    getAllPosts();
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getAllPosts,
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
        searchOpen,
        setSearchOpen,
        resetSearch,
        mapPostsListInRelationWithPostsUsersOwners,
        alterLikeCount,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
