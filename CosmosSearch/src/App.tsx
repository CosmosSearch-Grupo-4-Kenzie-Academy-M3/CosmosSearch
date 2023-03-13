import { AppRoutes } from "./routes/Router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppStyled, DivOpacity } from "./styles/AppStyled";
import galaxy from "./assets/background_images/galaxy.jpg";

import { Providers } from "./contexts/Providers";

export const App = () => {
  return (
    <>
      <AppStyled bg={galaxy}>
        <DivOpacity>
          <Providers>
            <AppRoutes />
          </Providers>
        </DivOpacity>
      </AppStyled>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
