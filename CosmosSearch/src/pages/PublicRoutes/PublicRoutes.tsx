import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const PublicRoutes = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userToken = localStorage.getItem("@CosmosSearch:TOKEN");

    if (userToken) {
      setUser(userToken);
    }
  }, []);

  return <>{user ? <Navigate to="/userDashboard" /> : <Outlet />}</>;
};
