import { useContext, useState } from "react";
import { UpdateUserForm } from "../../components/Forms/UpdateUserForm/UpdateUserForm";
import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/PostList";
import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { DivForButtons } from "./DivForButtons/DivForButtons";
import { UserDashboardStyled } from "./UserDashboardStyled";

export const UserDashboard = () => {
  const { burgerOpen, mainComponent } = useContext(LinksContext);

  return (
    <UserDashboardStyled>
      {/* Mobile */}
      <div className="userdash__mobile">
        <Header path="userDeslogged" />
        <DivForButtons />
        {mainComponent === "posts" ? (
          <Posts />
        ) : mainComponent === "updatePerfil" ? (
          <div className="container__form">
            <UpdateUserForm />
          </div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="userdash__desktop">
        <Header path="userDeslogged" />
        {burgerOpen ? (
          <main className="main__burgerOpen">
            <DivForButtons />
            {mainComponent === "posts" ? (
              <Posts />
            ) : mainComponent === "updatePerfil" ? (
              <UpdateUserForm />
            ) : null}
          </main>
        ) : (
          <main className="main__bugerClosed">
            <DivForButtons />
            {mainComponent === "posts" ? (
              <Posts />
            ) : mainComponent === "updatePerfil" ? (
              <UpdateUserForm />
            ) : null}
          </main>
        )}
      </div>
    </UserDashboardStyled>
  );
};
