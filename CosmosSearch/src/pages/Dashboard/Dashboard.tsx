import { useContext, useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/PostList";
import { PostModal } from "../../components/Posts/PostModal/PostModal";
import { DashboardStyled } from "./DashboardStyled";
import { NewPost } from "./NewPost/NewPost";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { PostContext } from "../../contexts/PostContext/PostContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const Dashboard = () => {
  const { burgerOpen, modalIsOpen } = useContext(LinksContext);
  const { userState } = useContext(UserContext);
  const { setIsDashboard, isDashboard } = useContext(PostContext);

  useEffect(() => {
    setIsDashboard(true);
  }, []);

  return (
    <DashboardStyled>
      {modalIsOpen ? <PostModal /> : <></>}
      <Header path={userState} />
      {/* Mobile */}
      <div className="searchbar">{isDashboard ? <SearchBar /> : <></>}</div>
      {userState === "userDeslogged" ? (
        burgerOpen ? (
          <main className="main__burgerOpen main__burgerOpen--deslogged">
            <Posts />
          </main>
        ) : (
          <main className="main__burgerClosed">
            <Posts />
          </main>
        )
      ) : burgerOpen ? (
        <main className="main__burgerOpen main__burgerOpen--logged">
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
          {userState === "userDeslogged" ? <></> : <NewPost />}
        </div>
        <Posts />
      </main>
    </DashboardStyled>
  );
};
