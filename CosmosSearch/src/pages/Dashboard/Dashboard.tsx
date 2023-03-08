import { useContext } from "react";
import { Header } from "../../components/Header/Header";

import { Posts } from "../../components/Posts/PostList";
import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { DashboardStyled } from "./DashboardStyled";
import { NewPost } from "./NewPost/NewPost";

export const Dashboard = () => {
  const { burgerOpen } = useContext(LinksContext);

  return (
    <DashboardStyled>
      <Header path="userLogged" />
      {/* Mobile */}
      {burgerOpen ? (
        <main className="main__burgerOpen">
          <NewPost />
          <Posts />
        </main>
      ) : (
        <main className="main__burgerClosed">
          <NewPost />
          <Posts />
        </main>
      )}
      {/* Desktop */}
      <main className="main__desktop">
        <div className="newpost__position">
          <NewPost />
        </div>
        <Posts />
      </main>
    </DashboardStyled>
  );
};
