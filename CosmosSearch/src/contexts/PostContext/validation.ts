import * as yup from "yup";

export const newUserPost = yup.object({
  title: yup.string().required("Please, fill this fild").max(65, "Title must be at most 65 characters"),
  topic: yup.string().required("Please, fill this fild").max(25, "Topic must be at most 25 characters"),
  body: yup.string().required("Please, fill this fild")
})

export const updateUserPost = yup.object().shape({
  text: yup.string().required("Por favor, preencha este campo"),
});

export const updatePostSchema = yup.object().shape({
  body: yup.string().required("Por favor, preencha este campo"),
});
