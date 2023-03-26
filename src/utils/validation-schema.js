import * as Yup from "yup";

export const aboutSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message"),
});

export const reviewSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  review: Yup.string().required().min(20).label("Review"),
});

export const registerSchema = Yup.object().shape({
  // name: Yup.string().required().label("Name"),
  email: Yup.string("El correo debe de ser string")
    .required("El correo es obligatorio")
    .email("El formato del correo es inválido")
    .label("Correo electrónico"),
  terminos: Yup.bool().oneOf(
    [true],
    "Necesitas aceptar los términos y condicones"
  ),
  // password: Yup.string().required().min(6).label("Password")
});

export const registerCode = Yup.object().shape({
  // name: Yup.string().required().label("Name"),
  code: Yup.number("El Código debe de ser un número")
    .required("El Código es obligatorio")
    .label("Código de verifiación"),
  // password: Yup.string().required().min(6).label("Password")
});

export const registerSupplementarySection1 = Yup.object().shape({
  description: Yup.string()
    .required("La descripción es requerida")
    .label("Descripción"),
});

export const registerSupplementarySection2 = Yup.object().shape({
  instagram: Yup.string()
    .required("El instagram es requerido")
    .label("Instagram"),
});

export const registerSupplementarySection3 = Yup.object().shape({
  nameAddress: Yup.string()
    .required("La dirección es requerida")
    .label("Dirección completa"),
  zipCode: Yup.number("Solo puedes ingresar números")
    .required("El código postal es requerido")
    .label("Código postal"),
  colonia: Yup.string("Solo puedes ingresar letras")
    .required("La colonia es requerida")
    .label("Colonia"),
  street: Yup.string("Solo puedes ingresar letras")
    .required("La calle es requerida")
    .label("Calle"),
});

export const registerSupplementarySection4 = Yup.object().shape({
  state: Yup.string("Solo puedes ingresar letras")
    .required("El estado es requerido")
    .label("Estado"),
  delegation: Yup.string("Solo puedes ingresar letras")
    .required("La delegación es requerida")
    .label("Delegación"),
  innerNumber: Yup.string()
    .required("El número interior es requerido")
    .label("Número interior"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export const contactSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message"),
});

export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.string().required().min(11).label("Number"),
  msg: Yup.string().required().min(20).label("Message"),
  terms: Yup.bool().oneOf([
    true,
    "You need to accept the terms and conditions",
  ]),
});
