import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/PostList";
import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { DivForButtons } from "./DivForButtons/DivForButtons";
import { UserDashboardStyled } from "./UserDashboardStyled";

export const UserDashboard = () => {
  const { burgerOpen } = useContext(LinksContext);

  return (
    <UserDashboardStyled>
      {/* Mobile */}
      <div className="userdash__mobile">
        <Header path="userDeslogged" />
        <DivForButtons />
        <Posts />
      </div>
      {/* Desktop */}
      <div className="userdash__desktop">
        <Header path="userDeslogged" />
        {burgerOpen ? (
          <main className="main__burgerOpen">
            <DivForButtons />
            <Posts />
          </main>
        ) : (
          <main className="main__bugerClosed">
            <DivForButtons/>
            <Posts />
          </main>
        )}
      </div>
    </UserDashboardStyled>
  );
};
