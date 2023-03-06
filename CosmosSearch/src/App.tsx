import { AppStyled, DivOpacity } from "./styles/AppStyled";
import galaxy from "./assets/background_images/galaxy.jpg";
import { Start } from "./pages/Start/Start";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { UserDashboard } from "./pages/UserDashboard/UserDashboard";
import { Providers } from "./contexts/Providers";

export const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <DivOpacity>
          <Providers>
            {/* <Start /> */}
            <UserDashboard />
            {/* <RegisterPage /> */}
          </Providers>
        </DivOpacity>
      </AppStyled>
    </>
  );
};
