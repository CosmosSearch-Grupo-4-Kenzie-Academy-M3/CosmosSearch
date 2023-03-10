import { SubmitHandler, useForm } from "react-hook-form"
import { INewComment } from "../../../contexts/CommentsContext/@typesComments"
import { Textarea } from "../../Input/Textarea/Textarea"
import { UpdatePostStyled } from "./UpdatePostStyled"

import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserPost } from "../../../contexts/PostContext/validation";
import { ButtonStyled } from "../../Button/ButtonStyled";

export const UpdatePost = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<INewComment>({
        resolver: yupResolver(updateUserPost)
    })

    const updateSubmit: SubmitHandler<INewComment> = (data) => {
        console.log(data)
    }

  return (
    <UpdatePostStyled onSubmit={handleSubmit(updateSubmit)}>
        <Textarea register={register("text")} error={errors.text?.message}/>
        <ButtonStyled borderColor="var(--primary-blue)" textColor="var(--primary-blue)">Send</ButtonStyled>
    </UpdatePostStyled>
  )
}
