import { useContext, useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/PostList";
import { PostModal } from "../../components/Posts/PostModal/PostModal";
import { DashboardStyled } from "./DashboardStyled";
import { NewPost } from "./NewPost/NewPost";
import { SearchBar } from "../../components/SearchBar/SearchBar";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { PostContext } from "../../contexts/PostContext/PostContext";
import { IUserInfos } from "../../contexts/UserContext/@types_User";

export const Dashboard = () => {
  const { burgerOpen, modalIsOpen } = useContext(LinksContext);
  const { userState, setUserState, users, getAllUsers } =
    useContext(UserContext);

  const { setIsDashboard, isDashboard } =
    useContext(PostContext);

  useEffect(() => {
    setIsDashboard(true);
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;

    if (userInfos) {
      const currentUserState = userInfos.currentUserState;
      setUserState(currentUserState);
    }
  }, []);

  useEffect(() => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    if (userInfos) {
      
      const currentUserState = userInfos.currentUserState;
      if (currentUserState !== "userDeslogged") {
        getAllUsers();
      }
    }
  }, [users]);

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
          <main className="main__burgerClosed main__burgerClosed--deslogged">
            <Posts />
          </main>
        )
      ) : burgerOpen ? (
        <main className="main__burgerOpen main__burgerOpen--logged">
          <NewPost />
          <Posts />
        </main>
      ) : (
        <main className="main__burgerClosed main__burgerClosed--logged">
          <NewPost />
          <Posts />
        </main>
      )}
      {/* Desktop */}
      {userState === "userDeslogged" ? (
        <main className="main__desktop main__desktop--deslogged">
          <Posts />
        </main>
      ) : (
        <main className="main__desktop main__desktop--logged">
          <div className="newpost__position">
            <NewPost />
          </div>
          <Posts />
        </main>
      )}
    </DashboardStyled>
  );
};
