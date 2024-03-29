import { Routes, Route } from "react-router-dom";
import { PostProvider } from "../contexts/PostContext/PostContext";

import { Dashboard } from "../pages/Dashboard/Dashboard";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProtectedRoutes } from "../pages/ProtectedRoutes/ProtectedRoutes";
import { PublicRoutes } from "../pages/PublicRoutes/PublicRoutes";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { Start } from "../pages/Start/Start";
import { UserDashboard } from "../pages/UserDashboard/UserDashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<Start />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/dashboard" element={<PostProvider><Dashboard /></PostProvider>} />
      <Route path="/userDashboard" element={<ProtectedRoutes />}>
        <Route index element={<PostProvider><UserDashboard /></PostProvider>} />
      </Route>
    </Routes>
  );
};
