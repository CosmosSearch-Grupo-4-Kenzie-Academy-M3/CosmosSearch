import { AppStyled, DivOpacity } from "./styles/AppStyled";
import galaxy from "./assets/background_images/galaxy.jpg";

import { Providers } from "./contexts/Providers";

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
