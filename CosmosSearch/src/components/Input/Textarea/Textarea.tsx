import { UseFormRegisterReturn } from "react-hook-form";

import { TextareaStyled } from "./TextareaStyled";

interface iTextarea {
  error?: string;
  register: UseFormRegisterReturn<string>;
  text?: string
}

export const Textarea = ({ register, error, text }: iTextarea) => {
  return (
    <TextareaStyled>
      <label className="input__label label" htmlFor={register.name}>
        {text}
      </label>
      <div className="containerInputSpan">
        <textarea
          id={register.name}
          {...register}
          placeholder="Type your post"
        ></textarea>
        {error ? <span className="spanError">{error}</span> : <></>}
      </div>
    </TextareaStyled>
  );
};
