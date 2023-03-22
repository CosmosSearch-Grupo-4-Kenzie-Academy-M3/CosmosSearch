import { UseFormRegisterReturn } from "react-hook-form";

import { ImputStyled } from "./InputStyled";

interface IInput {
  error?: string;
  register: UseFormRegisterReturn<string>;
  labelName: string;
  type: string;
  placeholder: string;
  value?: string
}

export const Input = ({
  error,
  placeholder,
  register,
  type,
  labelName,
  value
}: IInput) => {
  return (
    <ImputStyled>
      <label className="input__label" htmlFor={register.name}>
        {labelName}
      </label>
      <div className="containerInputSpan">
        <input
          placeholder={placeholder}
          className="input__placeholder"
          id={register.name}
          type={type}
          {...register}
          value={value}
        />
        {error ? <span className="spanError">{error}</span> : <></>}
      </div>
    </ImputStyled>
  );
};
