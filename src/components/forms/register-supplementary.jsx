import { useFormik } from "formik";
import useTattoboxApi from "../../hooks/use-tattobox-api";

import ErrorMsg from "./error-msg";

export const RegisterSupplementary = () => {
  const { completaarRegistro } = useTattoboxApi();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        NumeroCelular: "",
        userName: "",
        fechaDeNacimiento: "",
      },
      validationSchema: registerExtra,
      onSubmit: (
        {
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          NumeroCelular,
          userName,
          fechaDeNacimiento,
        },
        { resetForm }
      ) => {
        const body = {
          Nombre: nombre,
          Apellido_Paterno: apellidoPaterno,
          Apellido_Materno: apellidoMaterno,
          NumeroCelular: NumeroCelular,
          UserName: userName,
          Fecha_Nacimiento: fechaDeNacimiento,
          IdClasificacionParte: 1,
        };
        completaarRegistro(body);

        // resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-number">
        <label htmlFor="email">Nombre</label>
        <input
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Ingresa tu nombre"
          id="nombre"
        />
        {touched.nombre && <ErrorMsg error={errors.nombre} />}
      </div>
      <div className="tp-number">
        <label htmlFor="email">Apellido paterno</label>
        <input
          value={values.apellidoPaterno}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Ingresa tu apellido paterno"
          id="apellidoPaterno"
        />
        {touched.apellidoPaterno && <ErrorMsg error={errors.apellidoPaterno} />}
      </div>
      <div className="tp-number">
        <label htmlFor="email">Apellido materno</label>
        <input
          value={values.apellidoMaterno}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Ingresa tu apellido materno"
          id="apellidoMaterno"
        />
        {touched.apellidoMaterno && <ErrorMsg error={errors.apellidoMaterno} />}
      </div>
      <div className="tp-number">
        <label htmlFor="email">Número de celular</label>
        <input
          value={values.NumeroCelular}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Ingresa tu número de celular"
          id="NumeroCelular"
        />
        {touched.NumeroCelular && <ErrorMsg error={errors.NumeroCelular} />}
      </div>
      <div className="tp-number">
        <label htmlFor="email">Nombre de usuario</label>
        <input
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          id="userName"
        />
        {touched.userName && <ErrorMsg error={errors.userName} />}
      </div>
      <div className="tp-number">
        <label htmlFor="email">Fecha de nacimiento</label>
        <input
          value={values.fechaDeNacimiento}
          onChange={handleChange}
          onBlur={handleBlur}
          type="date"
          placeholder="Ingresa tu fecha de nacimiento"
          id="fechaDeNacimiento"
        />
        {touched.fechaDeNacimiento && (
          <ErrorMsg error={errors.fechaDeNacimiento} />
        )}
      </div>
    </form>
  );
};
