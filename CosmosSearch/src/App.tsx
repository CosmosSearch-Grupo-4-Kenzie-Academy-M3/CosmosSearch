import { AppStyled, DivOpacity } from "./styles/AppStyled";
import galaxy from "./assets/background_images/galaxy.jpg";
import { Start } from "./pages/Start/Start";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { UserDashboard } from "./pages/UserDashboard/UserDashboard";
import { Providers } from "./contexts/Providers";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AppRoutes } from "./routes/Router";

export const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <DivOpacity>
          <Providers>
            <AppRoutes/>
          </Providers>
        </DivOpacity>
      </AppStyled>
    </>
  );
};
