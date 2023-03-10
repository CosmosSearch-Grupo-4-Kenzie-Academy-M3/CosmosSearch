import * as yup from "yup"

export const updateUserPost = yup.object().shape({
    text: yup.string().required("Por favor, preencha este campo")
})