import * as Yup from "yup";
import { useFormik } from "formik";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import ErrorMsg from "./error-msg";
import { useUser } from "../../hooks/use-user";

export const FormCommentTatto = ({ IdContenido, setNewMessages }) => {
  const { setCommentTattoo } = useTattoboxApi();
  const { user } = useUser();

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        comment: "",
      },
      validationSchema: Yup.object().shape({
        // name: Yup.string().required().label("Name"),
        comment: Yup.string("Solo puyedes ingresar texto")
          .required("El comentario no puede ser vacío")
          .label("Comentario"),
      }),
      onSubmit: ({ comment }, { resetForm }) => {
        const body = {
          IdPerfil: user?.idPerfil,
          IdContenido: IdContenido,
          Comentario: comment,
          IdComentarioRespuesta: "",
        };
        setCommentTattoo(body);
        setNewMessages(true);

        resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-comment"
        placeholder="Agregar comentario"
        value={values.comment}
        id="comment"
        onChange={handleChange}
      />
      {<ErrorMsg error={errors.comment} />}
    </form>
  );
};
