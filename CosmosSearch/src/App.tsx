import { AppStyled } from "./styles/AppStyled";

import galaxy from "./assets/background_images/galaxy.jpg";

import { Start } from "./pages/Start/Start";

const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <Start/>
      </AppStyled>
    </>
  );
};

export default App;
