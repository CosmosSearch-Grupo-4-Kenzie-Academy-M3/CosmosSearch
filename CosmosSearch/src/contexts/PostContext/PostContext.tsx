import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import {
  IFormPostRegister,
  IUserFromApi,
  IUserInfos,
} from "../UserContext/@types_User";
import { IAllLikes, IPost, IPostContext, IUpdatePost } from "./@typesPost";
import { LinksContext } from "../LinksContext/LinksContext";
import { UserContext } from "../UserContext/UserContext";

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: iChildren) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
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
        const userPostsList: IPost[] =
          postListToUserLoggedWithLickedPosts.filter((post: IPost) => {
            return post.userId === userId;
          });
        const userOrderedList = orderPostsByData(userPostsList);
        setUserPosts(userOrderedList);
      } else if (userState === "userDeslogged") {
        const orderedList = orderPostsByData(postsListToUserLogged);
        setPosts(orderedList);
      }
    } catch (error) {
      console.log(error);
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
    return postsListsWithCorrectUsersOwnersNames
  };

  const getPostDate = () => {
    const methodDate = new Date();
    const day = methodDate.getDate();
    const mounth = methodDate.getMonth() + 1;
    const year = `${methodDate.getFullYear()}`.substring(2);
    const postDate = `${day}/${mounth}/${year}`;
    return postDate;
  };

  // const createLikeEndPointForPost = async (
  //   id: number,
  //   list: IPost[],
  //   token: string
  // ) => {
  //   try {
  //     const newLikeData = {
  //       qnt: 0,
  //       postId: id,
  //     };
  //     const newLikeResponse = await api.post(`/likes`, newLikeData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const newLike = newLikeResponse.data;
  //     const allLikes = [...allLikesList, newLike];
  //     setAllLikesList(allLikes);
  //   } catch (error) {
  //     toast.error("erro na criação de end point de like");
  //     toast.error("Something went wrong.");
  //   }
  // };

  // const createPost = async (data: IFormPostRegister) => {
  //   const userInfos = JSON.parse(
  //     localStorage.getItem("@CosmosSearch:USERINFOS") as string
  //   ) as IUserInfos;
  //   const userId = userInfos.id;
  //   const name = userInfos.name;
  //   const token = userInfos.token;
  //   const date = getPostDate();
  //   const newData = { ...data, userId, name, date };
  //   if (token) {
  //     try {
  //       const response = await api.post(`/posts`, newData, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const newPost = { ...response.data, qntOfLikes: 0, postLiked: false };
  //       const postsList = [...posts, newPost];
  //       createLikeEndPointForPost(response.data.id, postsList, token);
  //       toast.success("Post successfully created");
  //       setMainComponent("posts");
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Unable to create post!");
  //     }
  //   }
  // };

  // const deletePost = async (postId: number) => {
  //   const userInfos = JSON.parse(
  //     localStorage.getItem("@CosmosSearch:USERINFOS") as string
  //   ) as IUserInfos;
  //   const token = userInfos.token;
  //   const postLikesToDelete: IAllLikes = allLikesList.find(
  //     (likes) => likes.postId === postId
  //   ) as IAllLikes;
  //   const postLikesToDeleteId = postLikesToDelete.id;
  //   if (token) {
  //     try {
  //       await api.delete(`/likes/${postLikesToDeleteId}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       await api.delete(`/posts/${postId}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       toast.success("Post successfully deleted");
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Unable to delete post!");
  //     }
  //   }
  // };

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
      await api.patch(`/posts/${postId}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Post successfully updated");
      resetSearchInUpdatePost();
    } catch (error) {
      toast.error("Unable to update post!");
    }
  };

  const editUserNameInPost = (newName: string) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token;
    const userId = userInfos.id;
    const newData = { userId, date: getPostDate(), name: newName };
    const postsToUpdateNames: IPost[] = posts.filter(
      (post) => post.userId === userId
    ) as IPost[];
    postsToUpdateNames.forEach(async (post) => {
      try {
        const newPosts = await api.patch(`/posts/${post.id}`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(newPosts);
        resetSearchInUpdatePost();
      } catch (error) {
        console.log(error);
        toast.error("Unable to update post!");
      }
    });
  };

  const actualizePostLikedsUserArray = async (
    postId: number,
    postLiked: boolean
  ) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const userId = userInfos.id;
    const token = userInfos.token;
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
    const likeData = postLiked
      ? likes - 1 
      : likes + 1 ;
      if (isSearch) {
        const postListActualizedWithPostLiked = searchedPosts.map(
          (post) => {
            if (post.id === postId) {
              return {
                ...post,
                postLiked: !post.postLiked,
                likes: likeData
              };
            } else if (post.id !== postId) {
              return post;
            }
          }
        ) as IPost[];
        const orderedList = orderPostsByData(postListActualizedWithPostLiked);
        setSearchedPosts(orderedList);
      } else {
        const postListActualizedWithPostLiked = posts.map(
          (post) => {
            if (post.id === postId) {
              return {
                ...post,
                postLiked: !post.postLiked,
                likes: likeData
              };
            } else if (post.id !== postId) {
              return post;
            }
          }
        ) as IPost[];
        const orderedList = orderPostsByData(postListActualizedWithPostLiked);
        setPosts(orderedList);
        actualizePostLikedsUserArray(postId, postLiked);
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
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        userPosts,
        getAllPosts,
        // createPost,
        // deletePost,
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
        editUserNameInPost,
        mapPostsListInRelationWithPostsUsersOwners,
        alterLikeCount
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
