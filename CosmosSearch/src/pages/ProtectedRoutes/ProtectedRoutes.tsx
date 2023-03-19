import { useContext, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext/PostContext";
import { IUserInfos } from "../../contexts/UserContext/@types_User";

import { UserContext } from "../../contexts/UserContext/UserContext";

export const ProtectedRoutes = () => {
  const { user, setUser } = useContext(UserContext);
  const {getAllPosts} = useContext(PostContext)
  useEffect(() => {
    const userInfosInLs = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;

    if (userInfosInLs) {
      setUser(userInfosInLs)
    }
  }, []);

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};
