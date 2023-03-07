import { AppStyled, DivOpacity } from "./styles/AppStyled";
import galaxy from "./assets/background_images/galaxy.jpg";
import { Start } from "./pages/Start/Start";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { UserDashboard } from "./pages/UserDashboard/UserDashboard";
import { Providers } from "./contexts/Providers";
import { PostsDashboard } from "./pages/Dashboard/PostsDashboard";

export const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <DivOpacity>
          <Providers>
            {/* <Start /> */}
            <UserDashboard />
            <PostsDashboard />
            {/* <RegisterPage /> */}
          </Providers>
        </DivOpacity>
      </AppStyled>
    </>
  );
};
