import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Title } from "../../components/Title/Title";
import { LoginPageStyled } from "./LoginPageStyled";

export const LoginPage = () => {
  return (
    <div className="container__pages--forms">
      <LoginPageStyled>
        <div>
          <Title />;
          <div className="linksDesktop">
            <LinkButton path="/" text="Start" line={true} />
            <LinkButton path="/register" text="Sign Up" />
          </div>
          <div className="linksMobile">
            <LinkButton path="/" text="Start" />
            <div className="colum"></div>
            <LinkButton path="/register" text="Sign Up" />
          </div>
        </div>

        <LoginForm />
      </LoginPageStyled>
    </div>
  );
};
