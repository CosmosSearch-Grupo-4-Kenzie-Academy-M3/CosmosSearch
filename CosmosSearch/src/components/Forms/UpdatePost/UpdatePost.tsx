import { useForm } from "react-hook-form"
import { Textarea } from "../../Input/Textarea/Textarea"
import { UpdatePostStyled } from "./UpdatePostStyled"

export const UpdatePost = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <UpdatePostStyled>
        {/* <Textarea register={register} /> */}
    </UpdatePostStyled>
  )
}
