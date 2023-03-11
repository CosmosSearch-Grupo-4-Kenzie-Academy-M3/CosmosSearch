import { UseFormRegisterReturn } from "react-hook-form";

import { TextareaStyled } from "./TextareaStyled";

interface iTextarea {
  error?: string;
  register: UseFormRegisterReturn<string>;
  text?: string;
  width?: string;
}

export const Textarea = ({ register, error, text, width }: iTextarea) => {
  return (
    <TextareaStyled width={width}>
      <label className="input__label label" htmlFor={register.name}>
        {text}
      </label>
      <div className="containerInputSpan">
        <textarea
          className="input__label"
          id={register.name}
          {...register}
          placeholder="Type your post"
        ></textarea>
        {error ? <span className="spanError">{error}</span> : <></>}
      </div>
    </TextareaStyled>
  );
};
