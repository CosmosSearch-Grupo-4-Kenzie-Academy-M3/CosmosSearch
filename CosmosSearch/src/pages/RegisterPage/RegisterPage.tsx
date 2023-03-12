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
            <LinkButton path="/" text="Start" line={true} />
            <LinkButton path="/login" text="Login" />
          </div>
          <div className="linksMobile">
            <LinkButton path="/" text="Start" />
            <div className="colum"></div>
            <LinkButton path="/login" text="Login" />
          </div>
        </div>

        <RegisterUserForm />
      </RegisterPageStyled>
    </div>
  );
};
