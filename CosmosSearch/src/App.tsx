import { AppStyled, DivOpacity } from "./styles/AppStyled";
import galaxy from "./assets/background_images/galaxy.jpg";
import { Start } from "./pages/Start/Start";
import { RegisterPage } from "./pages/RegisterPage";

export const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <DivOpacity>
          {/* <Start /> */}
          <RegisterPage />
        </DivOpacity>
      </AppStyled>
    </>
  );
};


