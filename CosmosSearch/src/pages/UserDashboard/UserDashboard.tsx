import { useContext, useEffect } from "react";

import { RegisterPostForm } from "../../components/Forms/RegisterPostForm/RegisterPostForm";
import { UpdateUserForm } from "../../components/Forms/UpdateUserForm/UpdateUserForm";
import { Header } from "../../components/Header/Header";
import { PostModal } from "../../components/Posts/PostModal/PostModal";
import { DivForButtons } from "./DivForButtons/DivForButtons";
import { UserDashboardStyled } from "./UserDashboardStyled";
import { UserPosts } from "../../components/Posts/UserPostsList";
import { PostEdit } from "../../components/Posts/PostModal/PostEdit/PostEdit";
import { PostDelete } from "../../components/Posts/PostModal/PostDelete/PostDelete";
import { UserInfos } from "../../components/UserInfos/UserInfos";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { PostContext } from "../../contexts/PostContext/PostContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const UserDashboard = () => {
  const {
    burgerOpen,
    mainComponent,
    modalIsOpen,
    editModalIsOpen,
    deleteModalIsOpen,
  } = useContext(LinksContext);
  const { userState, setUserState, userInfos, setUserInfos, users, getAllUsers } =
    useContext(UserContext);
  const { setIsDashboard, getAllPosts, posts } =
    useContext(PostContext);
  const userName = userInfos?.name as string;
  const userEmail = userInfos?.email as string;

  useEffect(() => {
    setUserState("userLoggedInPerfil");
    setIsDashboard(false);
    const userInfosData = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
      );
    setUserInfos(userInfosData);
  }, []);

  useEffect(() =>  {
    getAllUsers();
  }, [users])

  return (
    <UserDashboardStyled>
      {modalIsOpen ? <PostModal /> : <></>}
      {editModalIsOpen ? <PostEdit /> : <></>}
      {deleteModalIsOpen ? <PostDelete /> : <></>}
      {/* Mobile */}
      <div className="userdash__mobile">
        <Header path={userState} />
        <DivForButtons />
        {burgerOpen ? (
          <div className="searchbar__burgueropen">
            <SearchBar />
          </div>
        ) : (
          <div className="searchbar">
            <SearchBar />
          </div>
        )}
        {mainComponent === "posts" ? (
          <UserPosts />
        ) : mainComponent === "updatePerfil" ? (
          <div className="container__form">
            <div>
              <UserInfos name={userName} email={userEmail} />
              <UpdateUserForm />
            </div>
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
          <main className="main__user main__burgerOpen">
            <DivForButtons />
            {mainComponent === "posts" ? (
              <UserPosts />
            ) : mainComponent === "updatePerfil" ? (
              <div className="user__section">
                <UserInfos name={userName} email={userEmail} />
                <UpdateUserForm />
              </div>
            ) : mainComponent === "registerPost" ? (
              <RegisterPostForm />
            ) : null}
          </main>
        ) : (
          <main className="main__user main__burgerClosed">
            <DivForButtons />
            {mainComponent === "posts" ? (
              <UserPosts />
            ) : mainComponent === "updatePerfil" ? (
              <div className="user__section">
                <UserInfos name={userName} email={userEmail} />
                <UpdateUserForm />
              </div>
            ) : mainComponent === "registerPost" ? (
              <RegisterPostForm />
            ) : null}
          </main>
        )}
      </div>
    </UserDashboardStyled>
  );
};
