import { RegisterUserForm } from "../../components/Forms/RegisterUserForm/RegisterUserForm";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Title } from "../../components/Title/Title";
import { RegisterPageStyled } from "./RegisterPageStyled";

export const RegisterPage = () => {
  return (
    <div className="container__pages--forms">
      <RegisterPageStyled>
        <div>
          <Title />;
          <div className="linksDesktop">
            <LinkButton text="Login" line={true} />
            <LinkButton text="Singup" />
          </div>
          <div className="linksMobile">
            <LinkButton text="Login" />
            <div className="colum"></div>
            <LinkButton text="Singup" />
          </div>
        </div>

        <RegisterUserForm />
      </RegisterPageStyled>
    </div>
  );
};
