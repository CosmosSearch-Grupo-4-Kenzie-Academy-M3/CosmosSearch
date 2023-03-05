import {ImputStyle} from "./InputStyle"

interface IInput {
    name: string;
}

export const Input = ({name} : IInput) => {

    return(
        
        <ImputStyle >
            <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>
            <div>
                <input id={name} type="text" />
                <span>erro</span>
            </div>
        </ImputStyle>

    )

} 