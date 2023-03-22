import * as yup from "yup";

export const newCommentSchema = yup.object({
    text: yup.string().required("Please, insert your comment.")
})