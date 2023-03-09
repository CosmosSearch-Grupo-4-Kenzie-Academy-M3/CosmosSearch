import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);

  return (
    <>{user ? <Outlet />: <Navigate to="/login" /> }</>
  );
};
