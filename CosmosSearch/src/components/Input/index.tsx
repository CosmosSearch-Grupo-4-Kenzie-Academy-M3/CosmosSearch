import { UseFormRegisterReturn } from "react-hook-form";
import { ImputStyle } from "./InputStyle";

interface IInput {
  error?: string;
  register: UseFormRegisterReturn<string>;
  labelName: string;
  type: string;
  placeholder: string;
}

export const Input = ({
  error,
  placeholder,
  register,
  type,
  labelName,
}: IInput) => {
  console.log(error);

  return (
    <ImputStyle>
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
        />
        {error ? <span className="spanError">{error}</span> : null}
      </div>
    </ImputStyle>
  );
};
