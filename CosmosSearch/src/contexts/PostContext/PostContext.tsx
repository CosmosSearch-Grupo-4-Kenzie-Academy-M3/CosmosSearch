import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { IFormPostRegister, IUserInfos } from "../UserContext/@types_User";
import { IAllLikes, IPost, IPostContext, IUpdatePost } from "./@typesPost";
import { LinksContext } from "../LinksContext/LinksContext";
import { UserContext } from "../UserContext/UserContext";

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: iChildren) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<IPost[]>([]);
  const [allLikesList, setAllLikesList] = useState<IAllLikes[]>([]);
  const [actualPostId, setActualPostId] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState<string | null>("");

  const { setMainComponent } = useContext(LinksContext);
  const { logout, userState, setUserInfos } = useContext(UserContext);

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

  const getAllLikes = async () => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    try {
      const response = await api.get("/likes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllLikesList(response.data);
      localStorage.setItem(
        "@CosmosSearch:LIKELIST",
        JSON.stringify(response.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPosts = async () => {
    const userInfos = JSON.parse(localStorage.getItem("@CosmosSearch:USERINFOS") as string) as IUserInfos
    try {
      const response = await api.get(`/posts`);
      const postsList: IPost[] = response.data;
      const postsListToUserLogged = postsList.map((post) => {
        return { ...post, postLiked: likeClicked };
      });
      const postListToUserLoggedWithLickedPosts = postsListToUserLogged.map((post) => {
        const postLiked = userInfos.postLikeds.find((id) => post.id === id)
        if (postLiked){
          return {
            ...post,
            postLiked: true
          } 
        }  else {
          return post
        }
      })
      const allLikes = JSON.parse(
        localStorage.getItem("@CosmosSearch:LIKELIST") as string
      ) as IAllLikes[];
      const postsWithLikes = postListToUserLoggedWithLickedPosts.map((post) => {
        const postToAddLike = allLikes.find(
          (like) => post.id === like.postId
        ) as IAllLikes;
        return {
          ...post,
          qntOfLikes: postToAddLike.qnt,
          likeId: postToAddLike.id,
        };
      });
      const orderedList = orderPostsByData(postsWithLikes);
      setPosts(orderedList);
    } catch (error) {
      console.log(error)
        toast.error("An error has occurred, plese login again."); 
    }
  };

  const getAllUserPosts = async () => {
    const userInfos = JSON.parse(localStorage.getItem("@CosmosSearch:USERINFOS") as string) as IUserInfos
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    const userId = localStorage.getItem("@CosmosSearch:USERID");
    if (token) {
      try {
        const response = await api.get(`/users/${userId}/posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const postsList: IPost[] = response.data;
        
        const allLikes = JSON.parse(
          localStorage.getItem("@CosmosSearch:LIKELIST") as string
        ) as IAllLikes[];
        const postListToUserLoggedWithLickedPosts = postsList.map((post) => {
          const postLiked = userInfos.postLikeds.find((id) => post.id === id)
          if (postLiked){
            return {
              ...post,
              postLiked: true
            } 
          }  else {
            return post
          }
        })
        const postsWithLikes: IPost[] = postListToUserLoggedWithLickedPosts.map((post) => {
          const postToAddLike = allLikes.find(
            (like) => post.id === like.postId
          ) as IAllLikes;
          return {
            ...post,
            qntOfLikes: postToAddLike.qnt,
            likeId: postToAddLike.id,
          };
        });
        const orderedList = orderPostsByData(postsWithLikes);
        setUserPosts(orderedList);
      } catch (error) {
        console.log(error)
          toast.error("An error has occurred, plese login again.");

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

  const createLikeEndPointForPost = async (
    id: number,
    list: IPost[],
    token: string
  ) => {
    try {
      const newLikeData = {
        qnt: 0,
        postId: id,
      };
      const newLikeResponse = await api.post(`/likes`, newLikeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newLike = newLikeResponse.data;
      const allLikes = [...allLikesList, newLike];
      const postsWithLikes = list.map((post) => {
        const postToAddLike = allLikes.find(
          (like) => post.id === like.postId
        ) as IAllLikes;
        return { ...post, qntOfLikes: postToAddLike.qnt };
      });
      const orderedList = orderPostsByData(postsWithLikes);
      setPosts(orderedList);
      setAllLikesList(allLikes);
      setMainComponent("posts");
    } catch (error) {
      toast.error("Something went wrong.");
      logout();
    }
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
        const postsList = [...posts, response.data];
        toast.success("Post successfully created");
        createLikeEndPointForPost(response.data.id, postsList, token);
      } catch (error) {
        console.log(error);
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
        getAllUserPosts();
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
  };

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
      getAllUserPosts();
      getAllPosts();
      toast.success("Post successfully updated");
      resetSearchInUpdatePost();
    } catch (error) {
      toast.error("Unable to update post!");
    }
  };

  const likePost = (postId: number) => {
    if (userState === "userLogged") {
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
    } else if (userState === "userLoggedInPerfil") {
      if (isSearch) {
        const postsWithLickedAlteration: IPost[] = searchedPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, postLiked: !post.postLiked };
          } else if (postId !== post.id) {
            return post;
          }
        }) as IPost[];
        setSearchedPosts(postsWithLickedAlteration);
        const actualizedPostsList = userPosts.map((post) => {
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
        setUserPosts(actualizedPostsList);
      } else {
        const postsWithLickedAlteration: IPost[] = userPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, postLiked: !post.postLiked };
          } else if (postId !== post.id) {
            return post;
          }
        }) as IPost[];
        setUserPosts(postsWithLickedAlteration);
      }
    }
  };

  const actualizePostLikedsUserArray = async (postId:number, postLiked: boolean) => {
    const userInfos = JSON.parse(localStorage.getItem("@CosmosSearch:USERINFOS") as string) as IUserInfos
    const userId = localStorage.getItem("@CosmosSearch:USERID")
    const token = localStorage.getItem("@CosmosSearch:TOKEN")
    const postLikeds = postLiked 
    ? userInfos.postLikeds.filter((id) => id !== postId) 
    : [...userInfos.postLikeds, postId]
    
    try {
      const response = await api.patch(`users/${userId}`, {
        postLikeds: postLikeds
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const newPostLikeds: number[] = response.data.postLikeds 
      const newUserInfos = {...userInfos, postLikeds: newPostLikeds}
      setUserInfos(newUserInfos)
      localStorage.setItem("@CosmosSearch:USERINFOS", JSON.stringify(newUserInfos))
    } catch (error) {
      console.log(error)
    }
  }

  const alterLikeCount = async (
    likeId: number,
    qntOfLikes: number,
    postId: number,
    postLiked: boolean
  ) => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    const likeData = postLiked
      ? { qnt: qntOfLikes - 1 }
      : { qnt: qntOfLikes + 1 };
      try {
      const response = await api.patch(`/likes/${likeId}`, likeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const allLikes = JSON.parse(
        localStorage.getItem("@CosmosSearch:LIKELIST") as string
      ) as IAllLikes[];
      const newAllLikes: IAllLikes[] = allLikes.map((like) => {
        if (like.id === response.data.id) {
          return response.data;
        } else {
          return like;
        }
      });
      setAllLikesList(newAllLikes);
      localStorage.setItem(
        "@CosmosSearch:LIKELIST",
        JSON.stringify(newAllLikes)
      );
      if (isSearch) {
        const postsListActualized = searchedPosts.map((post) => {
          const postToActualize = newAllLikes.find(
            (like) => post.id === like.postId 
          ) as IAllLikes
          if (postToActualize) {
            return {
              ...post,
              qntOfLikes: postToActualize.qnt,
            }
          } else {
            return post
          }
        });
        const postListActualizedWithPostLiked = postsListActualized.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              postLiked: !post.postLiked
            }
          } else if (post.id !== postId) {
            return post
          }
        }) as IPost[]
        const orderedList = orderPostsByData(postListActualizedWithPostLiked)
        setSearchedPosts(orderedList)
      }
      const postsListActualized = posts.map((post) => {
        const postToActualize = newAllLikes.find(
          (like) => post.id === like.postId 
        ) as IAllLikes
        if (postToActualize) {
          return {
            ...post,
            qntOfLikes: postToActualize.qnt,
          }
        } else {
          return post
        }
      });
      const userPostsListActualized = userPosts.map((post) => {
        const postToActualize = newAllLikes.find(
          (like) => post.id === like.postId 
        ) as IAllLikes
        if (postToActualize) {
          return {
            ...post,
            qntOfLikes: postToActualize.qnt,
          }
        } else {
          return post
        }
      });
      const postListActualizedWithPostLiked = postsListActualized.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            postLiked: !post.postLiked
          }
        } else if (post.id !== postId) {
          return post
        }
      }) as IPost[]
      const userPostListActualizedWithPostLiked = userPostsListActualized.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            postLiked: !post.postLiked
          }
        } else if (post.id !== postId) {
          return post
        }
      }) as IPost[]
      const orderedList = orderPostsByData(postListActualizedWithPostLiked)
      setPosts(orderedList)
      const userOrderedList = orderPostsByData(userPostListActualizedWithPostLiked)
      setUserPosts(userOrderedList)
      actualizePostLikedsUserArray(postId, postLiked)
    } catch (error) {
      console.log(error);
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
        resetSearch,
        getAllLikes,
        alterLikeCount,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
