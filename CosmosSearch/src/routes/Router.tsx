import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { Start } from "../pages/Start/Start";
import { UserDashboard } from "../pages/UserDashboard/UserDashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="userDashboard" element={<UserDashboard />} />
    </Routes>
  );
};
