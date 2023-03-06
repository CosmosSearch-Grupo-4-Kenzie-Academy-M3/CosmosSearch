import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";
import {ImputStyle} from "./InputStyle"

interface IInput {
    
    error?: string;
    register: UseFormRegisterReturn<string>;
    labelName: string;
    type:string;
    
    
};

export const Input = ({error,  register , type, labelName} : IInput) => {

    console.log(error)

    return(
        
        <ImputStyle >
            <label className="input__label" htmlFor={register.name}>{labelName}</label>
            <div  className="containerInputSpan">
                <input className="input__placeholder" id={register.name} type={type} {...register}/>
                {error ? <span className="spanError">{error}</span> : null}
            </div>
        </ImputStyle>

    );

} ;