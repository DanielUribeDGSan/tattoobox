import { useFormik } from "formik";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { useUser } from "../../hooks/use-user";
import { registerSupplementary } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";

export const RegisterSupplementary = ({ refBtn }) => {
  const { completeRegister } = useTattoboxApi();
  const { user } = useUser();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        lastNamePaternal: "",
        lastNameMaternal: "",
        mobileNumber: "",
        userName: "",
        birthDate: "",
      },
      validationSchema: registerSupplementary,
      onSubmit: (
        {
          name,
          lastNamePaternal,
          lastNameMaternal,
          mobileNumber,
          userName,
          birthDate,
        },
        { resetForm }
      ) => {
        const body = {
          email: user?.email,
          Nombre: name,
          Apellido_Paterno: lastNamePaternal,
          Apellido_Materno: lastNameMaternal,
          NumeroCelular: mobileNumber,
          UserName: userName,
          Fecha_Nacimiento: birthDate,
          IdClasificacionParte: 1,
        };
        completeRegister(body);
        refBtn.current.click();
        resetForm();
      },
    });

  return (
    <div className="d-flex justify-content-center">
      <div className="tpsupplementary">
        <div className="tpsupplementary__title">
          <h3>Completa tu registro</h3>
        </div>
        <div className="tpsupplementary__form">
          <form onSubmit={handleSubmit}>
            <div className="tp-input">
              <label htmlFor="name">Nombre</label>
              <input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ingresa tu name"
                id="name"
              />
              {touched.name && <ErrorMsg error={errors.name} />}
            </div>
            <div className="tp-input">
              <label htmlFor="lastNamePaternal">Apellido paterno</label>
              <input
                value={values.lastNamePaternal}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ingresa tu apellido paterno"
                id="lastNamePaternal"
              />
              {touched.lastNamePaternal && (
                <ErrorMsg error={errors.lastNamePaternal} />
              )}
            </div>
            <div className="tp-input">
              <label htmlFor="lastNameMaternal">Apellido materno</label>
              <input
                value={values.lastNameMaternal}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ingresa tu apellido materno"
                id="lastNameMaternal"
              />
              {touched.lastNameMaternal && (
                <ErrorMsg error={errors.lastNameMaternal} />
              )}
            </div>
            <div className="tp-input">
              <label htmlFor="mobileNumber">Número de celular</label>
              <input
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ingresa tu número de celular"
                id="mobileNumber"
              />
              {touched.mobileNumber && <ErrorMsg error={errors.mobileNumber} />}
            </div>
            <div className="tp-input">
              <label htmlFor="userName">Nombre de usuario</label>
              <input
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ingresa tu name de usuario"
                id="userName"
              />
              {touched.userName && <ErrorMsg error={errors.userName} />}
            </div>
            <div className="tp-input">
              <label htmlFor="birthDate">Fecha de nacimiento</label>
              <input
                value={values.birthDate}
                onChange={handleChange}
                onBlur={handleBlur}
                type="date"
                placeholder="Ingresa tu fecha de nacimiento"
                id="birthDate"
              />
              {touched.birthDate && <ErrorMsg error={errors.birthDate} />}
            </div>
            <div className="tp-login-button">
              <button className="tp-btn-black w-100 text-white" type="submit">
                Completar registro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
