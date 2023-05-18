import * as yup from "yup";

export const formmSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Por favor, insira um email válido"),
  password: yup
    .string()
    .required("Preencha este campo")
    .matches(/[a-z]/, "Deve conter uma letra minuscula")
    .matches(/\d/, "Deve conter ao menos 1 numero")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiuscula")
    .matches(/\W|_/, "Deve conter no minimo caracter especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracters"),

  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Comfirmar senha deve ser igual senha"),
});

export const userUpdateSchema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .email("Por favor, insira um email válido"),
  password: yup
    .string()
    .matches(/[a-z]/, "Deve conter uma letra minuscula")
    .matches(/\d/, "Deve conter ao menos 1 numero")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiuscula")
    .matches(/\W|_/, "Deve conter no minimo caracter especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracters"),
});
