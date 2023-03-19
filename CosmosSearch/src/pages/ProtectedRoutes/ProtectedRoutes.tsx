import { useContext, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext/UserContext";
import { IUserInfos } from "../../contexts/UserContext/@types_User";

export const ProtectedRoutes = () => {
  const { user, setUser } = useContext(UserContext);

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
