import { useContext, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext/UserContext";
import { IUserInfos } from "../../contexts/UserContext/@types_User";

export const PublicRoutes = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;

    if (userInfos) {
      const token = userInfos.token;
      setUser(token);
    }
  }, []);

  return <>{user ? <Navigate to="/userDashboard" /> : <Outlet />}</>;
};
