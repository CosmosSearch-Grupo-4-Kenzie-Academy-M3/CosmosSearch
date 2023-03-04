import { AppStyled, DivOpacity } from "./styles/AppStyled";

import galaxy from "./assets/background_images/galaxy.jpg";

import { Start } from "./pages/Start/Start";

export const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <DivOpacity>
          <Start />
        </DivOpacity>
      </AppStyled>
    </>
  );
};


