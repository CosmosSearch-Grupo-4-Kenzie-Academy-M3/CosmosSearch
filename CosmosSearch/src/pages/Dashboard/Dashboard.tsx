import { useContext, useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/PostList";
import { PostModal } from "../../components/Posts/PostModal/PostModal";
import { DashboardStyled } from "./DashboardStyled";
import { NewPost } from "./NewPost/NewPost";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const Dashboard = () => {
  const { burgerOpen, modalIsOpen } = useContext(LinksContext);
  const { userState, setUserState } = useContext(UserContext);

  useEffect(() => {
    setUserState("userLogged");
  }, []);

  return (
    <DashboardStyled>
      {modalIsOpen ? <PostModal /> : <></>}
      <Header path={userState} />
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
