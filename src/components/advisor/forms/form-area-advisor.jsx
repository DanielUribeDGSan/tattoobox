import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useUser } from '../../../hooks/use-user';
import {
  registerSupplementarySection1Artist,
  registerSupplementarySection2,
  registerSupplementarySection3,
  registerSupplementarySection4,
} from '../../../utils/validation-schema';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormPart } from './FormPart';
import useTattoboxAdvisor from '../../../hooks/use-tattobox-advisor';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
  },
});

export const FormAreaAdvisor = ({ setImage, image }) => {
  const { user } = useUser();
  const [sectionForm, setSectionForm] = useState(1);
  const [file, setFile] = useState([]);
  const {
    getQuestions2,
    advisorQuestion2,
    isLoadingQuestion2,
    setIsLoadingQuestion2,
  } = useTattoboxAdvisor();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        city: { value: '', label: 'Selecciona una opción' },
        tattoDate: { value: 0, label: 'Selecciona una opción' },
        bodyPart: { value: 0, label: 'Selecciona una opción' },
        size: { value: 0, label: 'Selecciona una opción' },
        color: '',
        style: '',
        images: [],
        idea: '',
        budget: '',
      },
      validationSchema: null,
      onSubmit: async (
        { city, tattoDate, bodyPart, size, color, style, images, idea, budget },
        { resetForm }
      ) => {
        setImage(image + 1);
        setSectionForm(sectionForm + 1);

        // handleSubmitValidateForm();

        // const body = {
        //   idPerfil: user?.idPerfil,
        //   Descripcion: description,
        //   Facebook: facebook,
        //   Instagram: instagram,
        //   Twitter: twitter,
        //   Whatsapp: whatsapp,
        //   SitioWeb: webSitie,
        //   NombreDireccion: nameAddress,
        //   CodigoPostal: zipCode,
        //   Estado: state,
        //   Delegacion: delegation,
        //   Colonia: colonia,
        //   Calle: street,
        //   NumeroExterior: numberOutside,
        //   NumeroInterior: innerNumber,
        // };

        // if (sectionForm === 4) await registerArtist(body, user?.idParte);
      },
    });

  const handleOnClickBack = () => {
    if (sectionForm === 1) Router.push('/');
    if (sectionForm < 4) {
      // setShowImage(true);
    } else {
      // setShowImage(false);
    }
    setImage(image - 1);
    setSectionForm(sectionForm - 1);
  };
  const updateFiles = (incommingFiles) => {
    setFile(incommingFiles);
  };
  const handleSubmitValidateForm = () => {
    if (!values.description && sectionForm === 1) return false;
    if (!values.instagram && sectionForm === 2) return false;
    if (sectionForm === 3) {
      if (
        !values.nameAddress ||
        !values.zipCode ||
        !values.colonia ||
        !values.street
      )
        return false;
    }
    if (sectionForm === 4) {
      if (!values.state || !values.delegation || !values.innerNumber)
        return false;
    }
    if (sectionForm === 2) setShowImage(false);
    if (sectionForm === 3) setShowImage(true);
    setSectionForm(sectionForm + 1);
  };

  const handleChangeType2 = (name) => (newValue) => {
    handleChange({
      target: {
        name: name,
        value: newValue,
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionForm]);

  useEffect(() => {
    let active = true;
    if (active) {
      setIsLoadingQuestion2(true);
      getQuestions2()
        .then(() => setIsLoadingQuestion2(false))
        .catch(() => setIsLoadingQuestion2(false));
    }
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <div
        className='form__advisor w-100'
        style={{ alignItems: sectionForm === 6 ? 'flex-start' : 'center' }}
      >
        <div className='w-100 content-advisor'>
          {isLoadingQuestion2 ? (
            <p>Cargando...</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <ThemeProvider theme={theme}>
                <div>
                  <button
                    type='button'
                    className='text-black'
                    style={{ fontSize: '1.1rem', marginBottom: '15px' }}
                    onClick={handleOnClickBack}
                  >
                    <i
                      className='far fa-arrow-left'
                      style={{
                        marginRight: '10px',
                      }}
                    ></i>
                    {sectionForm === 1 ? 'Regresar al inicio' : 'Regresar'}
                  </button>
                </div>
                {sectionForm === 1 && (
                  <FormPart
                    question={advisorQuestion2[0]}
                    name='city'
                    onChangeFunction={handleChange}
                    inputValue={values.city}
                    label='Selecciona una ciudad'
                  />
                )}

                {sectionForm === 2 && (
                  <FormPart
                    question={advisorQuestion2[1]}
                    name='tattoDate'
                    onChangeFunction={handleChange}
                    inputValue={values.tattoDate}
                    label='Selecciona una fecha'
                  />
                )}

                {sectionForm === 3 && (
                  <FormPart
                    question={advisorQuestion2[2]}
                    name='bodyPart'
                    onChangeFunction={handleChange}
                    inputValue={values.bodyPart}
                    label='Selecciona una parte de cuerpo'
                  />
                )}

                {sectionForm === 4 && (
                  <FormPart
                    question={advisorQuestion2[3]}
                    name='size'
                    onChangeFunction={handleChange}
                    inputValue={values.size}
                    label='Selecciona un tamaño'
                  />
                )}

                {sectionForm === 5 && (
                  <FormPart
                    question={advisorQuestion2[4]}
                    name='color'
                    onChangeFunction={handleChange}
                    inputValue={values.color}
                    label='Selecciona una opción'
                  />
                )}
                {sectionForm === 6 && (
                  <FormPart
                    question={advisorQuestion2[5]}
                    name='style'
                    onChangeFunction={handleChange}
                    inputValue={values.style}
                    label='Selecciona una opción'
                  />
                )}
                {sectionForm === 7 && (
                  <FormPart
                    question={advisorQuestion2[6]}
                    name='images'
                    onChangeFunction={setFile}
                    inputValue={file}
                    label='Selecciona una opción'
                  />
                )}
                {sectionForm === 8 && (
                  <FormPart
                    question={advisorQuestion2[7]}
                    name='idea'
                    onChangeFunction={handleChangeType2('idea')}
                    inputValue={values.idea}
                    label='Escribe tu idea'
                  />
                )}
                {sectionForm === 9 && (
                  <FormPart
                    question={advisorQuestion2[8]}
                    name='budget'
                    onChangeFunction={handleChange}
                    inputValue={values.budget}
                    label='Selecciona una opción'
                  />
                )}

                <div className='tp-login-button mb-3'>
                  <button className='tp-btn-black ' type='submit'>
                    {sectionForm <= 8 ? 'Siguiente' : 'Completar cita'}
                  </button>
                </div>
              </ThemeProvider>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
