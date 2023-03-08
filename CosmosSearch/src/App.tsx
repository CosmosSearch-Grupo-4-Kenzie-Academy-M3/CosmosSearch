import { AppStyled, DivOpacity } from "./styles/AppStyled";
import galaxy from "./assets/background_images/galaxy.jpg";
import { Start } from "./pages/Start/Start";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { UserDashboard } from "./pages/UserDashboard/UserDashboard";
import { Providers } from "./contexts/Providers";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";

export const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <DivOpacity>
          <Providers>
            {/* <LoginPage/> */}
            {/* <RegisterPage /> */}
            {/* <Start /> */}
            {/* <UserDashboard /> */}
            <Dashboard/>
          </Providers>
        </DivOpacity>
      </AppStyled>
    </>
  );
};
