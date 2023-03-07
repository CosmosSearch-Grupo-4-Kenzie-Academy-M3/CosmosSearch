import { UseFormRegisterReturn } from "react-hook-form";

import { TextareaStyled } from "./TextareaStyled";

interface iTextarea {
  error?: string;
  register: UseFormRegisterReturn<string>;
}

export const Textarea = ({ register, error }: iTextarea) => {
  return (
    <TextareaStyled>
      <label className="input__label" htmlFor={register.name}>
        Post
      </label>
      <div className="containerInputSpan">
        <textarea id={register.name} {...register} placeholder="Type your post"></textarea>
        {error ? <span className="spanError">{error}</span> : null}
      </div>
    </TextareaStyled>
  );
};
