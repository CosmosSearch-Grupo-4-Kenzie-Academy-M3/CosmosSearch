import { Input } from "../../components/Input"
import { LinkButton } from "../../components/LinkButton/LinkButton"
import { Title } from "../../components/Title/Title"
import {RegisterPageStyle} from "./RegisterPage"

export const RegisterPage = () => {

    

    return (


        <RegisterPageStyle >

            <div>
                <Title />
                <div>
                    <LinkButton text="Login" />
                    <div className="colum"></div>
                    <LinkButton text="Singup" />
                </div>
            </div>

            <form>

                <Input name="name"/>
                <Input name="email"/>
                <Input name="password"/>
                <Input name="confirm password"/>

            </form>



        </RegisterPageStyle>


    )

} 