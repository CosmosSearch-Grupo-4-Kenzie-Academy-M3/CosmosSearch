import { Header } from "../../components/Header/Header";
import { DivForButtons } from "./DivForButtons/DivForButtons";
import { UserDashboardStyled } from "./UserDashboardStyled";

export const UserDashboard = () => {
  return (
    <UserDashboardStyled>
      <Header path="userDeslogged" />
      <DivForButtons/>
    </UserDashboardStyled>
  );
};
