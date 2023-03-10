import { useContext, useEffect } from "react";

import { RegisterPostForm } from "../../components/Forms/RegisterPostForm/RegisterPostForm";
import { UpdateUserForm } from "../../components/Forms/UpdateUserForm/UpdateUserForm";
import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/PostList";
import { PostModal } from "../../components/Posts/PostModal/PostModal";
import { DivForButtons } from "./DivForButtons/DivForButtons";
import { UserDashboardStyled } from "./UserDashboardStyled";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const UserDashboard = () => {
  const { burgerOpen, mainComponent, modalIsOpen } = useContext(LinksContext);
  const { userState, setUserState } = useContext(UserContext);

  useEffect(() => {
    setUserState("userLoggedInPerfil");
  }, []);

  return (
    <UserDashboardStyled>
      {modalIsOpen ? <PostModal /> : <></>}
      {/* Mobile */}
      <div className="userdash__mobile">
        <Header path={userState} />
        <DivForButtons />
        {mainComponent === "posts" ? (
          <Posts />
        ) : mainComponent === "updatePerfil" ? (
          <div className="container__form">
            <UpdateUserForm />
          </div>
        ) : mainComponent === "registerPost" ? (
          <div className="container__form">
            <RegisterPostForm />
          </div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="userdash__desktop">
        <Header path={userState} />
        {burgerOpen ? (
          <main className="main__burgerOpen">
            <DivForButtons />
            {mainComponent === "posts" ? (
              <Posts />
            ) : mainComponent === "updatePerfil" ? (
              <UpdateUserForm />
            ) : mainComponent === "registerPost" ? (
              <RegisterPostForm />
            ) : null}
          </main>
        ) : (
          <main className="main__bugerClosed">
            <DivForButtons />
            {mainComponent === "posts" ? (
              <Posts />
            ) : mainComponent === "updatePerfil" ? (
              <UpdateUserForm />
            ) : mainComponent === "registerPost" ? (
              <RegisterPostForm />
            ) : null}
          </main>
        )}
      </div>
    </UserDashboardStyled>
  );
};
