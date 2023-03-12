import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { registerSchema, registerCode } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { get_user } from "../../redux/features/auth-slice";

const RegisterForm = () => {
  // register With Email Password
  const { registroEmail, validarCodigo, completaarRegistro } = useTattoboxApi();
  const [showCode, setShowCode] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        code: "",
        terminos: false,
      },
      validationSchema: !showCode ? registerSchema : registerCode,
      onSubmit: ({ email, code, terminos }, { resetForm }) => {
        if (!showCode) {
          registroEmail(email);
          setShowCode(true);
        } else {
          validarCodigo(email, code);
        }
        // resetForm();
      },
    });

  // get_user
  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {!showCode ? (
          <>
            <div className="tp-mail">
              <label htmlFor="email">Email</label>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ingresa tu correo"
                id="email"
              />
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
            <div className="tp-forgot-password d-flex justify-content-between">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="terminos"
                  name="terminos"
                  value={values.terminos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="terminos" style={{ marginLeft: "10px" }}>
                  Acepto los términos y condiciones
                </label>
                {touched.terminos && (
                  <ErrorMsg error="Necesitas aceptar los términos y condicones" />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <button
                style={{ fontSize: "1.1rem", marginBottom: "10px" }}
                onClick={() => {
                  values.code = "";
                  setShowCode(false);
                }}
              >
                <i
                  className="far fa-arrow-left"
                  style={{
                    marginRight: "10px",
                  }}
                ></i>{" "}
                Verificar correo
              </button>
            </div>
            <div className="tp-number">
              <label htmlFor="email">Código de verificación</label>
              <input
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ingresa el código"
                id="code"
              />
              {touched.code && <ErrorMsg error={errors.code} />}
            </div>
          </>
        )}
        <div className="tp-login-button">
          <button className="tp-btn-yellow w-100" type="submit">
            {!showCode ? "Registrarme" : "Verificar código"}
          </button>
        </div>
        <div className="tp-signup d-flex justify-content-between">
          <div className="account">
            <Link href="/login">
              <a href="#">¿Tienes una cuenta?</a>
            </Link>
          </div>
          {/* <div className="signin">
          <Link href="/login">
            <a>Sign in now</a>
          </Link>
        </div> */}
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
