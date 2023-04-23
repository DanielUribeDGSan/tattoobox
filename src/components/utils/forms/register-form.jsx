import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { registerSchema, registerCode } from "../../../utils/validation-schema";
import ErrorMsg from "./error-msg";
import useTattoboxAuthRegister from "../../../hooks/use-tattobox-auth-register";
import useFirebase from "../../../hooks/use-firebase";
import { useUser } from "../../../hooks/use-user";
import { ProgressSmall } from "../progress/progress-small";

const RegisterForm = () => {
  // register With Email Password
  const [loading, setLoading] = useState(false);
  const { registerEmail, validateCode } = useTattoboxAuthRegister();
  const [showCode, setShowCode] = useState(false);
  const { loginWithGoogle } = useFirebase();
  const { verifyLoggedUser } = useUser();
  verifyLoggedUser();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        code: "",
        terminos: false,
      },
      validationSchema: !showCode ? registerSchema : registerCode,
      onSubmit: async ({ email, code, terminos }, { resetForm }) => {
        if (!showCode) {
          setLoading(true);
          await registerEmail(email);
          setLoading(false);
          setShowCode(true);
        } else {
          setLoading(true);
          await validateCode(email, code);
          setLoading(false);
        }
        // resetForm();
      },
    });

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
                type="text"
                placeholder="Ingresa tu correo"
                id="email"
              />
              {errors.email && <ErrorMsg error={errors.email} />}
            </div>
            <div className="tp-forgot-password d-flex justify-content-between">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="terminos"
                  name="terminos"
                  value={values.terminos}
                  onChange={handleChange}
                />
                <label htmlFor="terminos" style={{ marginLeft: "10px" }}>
                  Acepto los términos y condiciones
                </label>
                {errors.terminos && (
                  <ErrorMsg error="Necesitas aceptar los términos y condicones" />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <button
                type="button"
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "10px",
                  color: "black",
                }}
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
                ></i>
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
          {loading ? (
            <ProgressSmall />
          ) : (
            <button className="tp-btn-yellow w-100" type="submit">
              {!showCode ? "Ingresar" : "Verificar código"}
            </button>
          )}
          <button
            type="button"
            className="tp-btn-yellow w-100 mt-3"
            onClick={loginWithGoogle}
          >
            Entrar con google
          </button>
        </div>
        <div className="tp-signup d-flex justify-content-between">
          {/* <div className="account">
            <Link href="/login">
              <a href="#">¿Tienes una cuenta?</a>
            </Link>
          </div> */}
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
