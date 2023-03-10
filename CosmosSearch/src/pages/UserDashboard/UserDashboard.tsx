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
import { PostContext } from "../../contexts/PostContext/PostContext";
import { UserPosts } from "../../components/Posts/UserPosts";
import { PostEdit } from "../../components/Posts/PostModal/PostEdit/PostEdit";

export const UserDashboard = () => {
  const { burgerOpen, mainComponent, modalIsOpen, editModalIsOpen } = useContext(LinksContext);
  const { userState, setUserState , } = useContext(UserContext);
  const {userPosts} = useContext(PostContext)

  useEffect(() => {
    setUserState("userLoggedInPerfil");
   
  }, []);
  console.log(userPosts)
  return (
    <UserDashboardStyled>
      {modalIsOpen ? <PostModal /> : <></>}
      {editModalIsOpen ? <PostEdit/> : <></>}
      {/* Mobile */}
      <div className="userdash__mobile">
        <Header path={userState} />
        <DivForButtons />
        {mainComponent === "posts" ? (
          <UserPosts />
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
              <UserPosts />
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
              <UserPosts />
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
