import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import ErrorMsg from "./error-msg";
import { get_user } from "../../redux/features/auth-slice";

export const FormCommentTatto = ({ IdContenido, setNewMessages }) => {
  const { setCommentTattoo } = useTattoboxApi();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

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
          IdPerfil: user.perfil.idPerfil,
          IdContenido: IdContenido,
          Comentario: comment,
          IdComentarioRespuesta: "",
        };
        setCommentTattoo(body);
        setNewMessages(true);

        resetForm();
      },
    });

  // get_user
  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

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
