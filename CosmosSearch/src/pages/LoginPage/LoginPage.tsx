import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";;
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
            <LinkButton text="Start" line={true} />
            <LinkButton text="Singup" />
          </div>
          <div className="linksMobile">
            <LinkButton text="Start" />
            <div className="colum"></div>
            <LinkButton text="Singup" />
          </div>
        </div>

        <LoginForm />
      </LoginPageStyled>
    </div>
  );
};
