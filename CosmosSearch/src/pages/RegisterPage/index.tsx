import { Input } from "../../components/Input"
import { LinkButton } from "../../components/LinkButton/LinkButton"
import { Title } from "../../components/Title/Title"
import {RegisterPageStyle} from "./RegisterPage"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'



interface IformRegister{

    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    
}


export const RegisterPage = () => {

    const fromSchema = yup.object().shape({
  
      
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().required('Campo obrigatório'),
        password: yup.string()
        .required("Preencha este campo")
        .matches(/[a-z]/, "Deve conter uma letra minuscula")
        .matches(/\d/, "Deve conter ao menos 1 numero")
        .matches(/[A-Z]/, "Deve conter ao menos uma letra maiuscula")
        .matches(/\W|_/, "Deve conter no minimo caracter especial")
        .matches(/.{8,}/, "Deve conter no minimo 8 caracters"),

        confirmPassword: yup.string().required('Campo obrigatório')
        .oneOf([yup.ref("password")], "Comfirmar senha deve ser igual senha"),
        
        
      })
  
      const {register , handleSubmit , formState:{errors}} = useForm < IformRegister >({
  
        resolver: yupResolver(fromSchema)
    
      })
  
    const userSubmit : SubmitHandler<IformRegister> =  (data) => {
  
     console.log(data)
  
    }

    return (

        <RegisterPageStyle >

            

            <div>
                <Title />;
                <div>
                    <LinkButton text="Login" />
                    <div className="colum"></div>
                    <LinkButton text="Singup" />
                </div>
            </div>

            <form onSubmit={handleSubmit(userSubmit)}>

                <Input   error={errors.name?.message} register={register("name")} type="text" labelName="Name" />
                <Input   error={errors.email?.message} register={register("email")} type="email"  labelName="Email"  />
                <Input   error={errors.password?.message} register={register("password")} type="password"  labelName="Password" />
                <Input   error={errors.confirmPassword?.message} register={register("confirmPassword")} type="password"  labelName="Confirm password"/>
                <button type="submit">Register</button>
            </form>

        </RegisterPageStyle>


    );

};

