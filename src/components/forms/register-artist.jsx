import { useFormik } from "formik";
import { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getZipCode,
  getDetails,
} from "use-places-autocomplete";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { useUser } from "../../hooks/use-user";
import { registerSupplementary } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";

export const RegisterArtist = ({ setSelected, setShowImage }) => {
  const [sectionForm, setSectionForm] = useState(1);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const { completeRegister } = useTattoboxApi();
  const { user } = useUser();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        description: "",
        facebook: "",
        instagram: "",
        twitter: "",
        whatsapp: "",
        webSitie: "",
        nameAddress: "",
        zipCode: "",
        state: "",
        delegation: "",
        colonia: "",
        street: "",
        numberOutside: "",
        innerNumber: "",
      },
      validationSchema: registerSupplementary,
      onSubmit: (
        {
          description,
          facebook,
          instagram,
          twitter,
          whatsapp,
          webSitie,
          nameAddress,
          zipCode,
          state,
          delegation,
          colonia,
          street,
          numberOutside,
          innerNumber,
        },
        { resetForm }
      ) => {
        // completeRegister(body);
        resetForm();
      },
    });

  const setLocation = async (address, place_id) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    const zipCode = getZipCode(results[0], false);

    const params = {
      placeId: place_id,
    };

    await getDetails(params)
      .then(({ vicinity, name }) => {
        values.colonia = vicinity;
        values.street = name;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    values.nameAddress = address;
    values.zipCode = zipCode || "";
    const satteDelegation = address.split(",");
    values.delegation = satteDelegation[2] || "";
    values.state = satteDelegation[3] || "";

    setSelected({ lat, lng });
  };

  const handleOnclick = (description, place_id) => () => {
    setLocation(description, place_id);
  };

  return (
    <>
      <div className="tpartist h-100">
        <div className="tpartist__title">
          <h3>Registro artista</h3>
        </div>
        <div className="tpartist__form">
          <form onSubmit={handleSubmit}>
            {sectionForm === 1 && (
              <div className="tp-input">
                <label htmlFor="description">Descripciópn</label>
                <textarea
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Ingresa tu descripción"
                  id="description"
                  rows="8"
                  cols="33"
                  style={{ height: "auto" }}
                />
                {touched.description && <ErrorMsg error={errors.description} />}
              </div>
            )}
            {sectionForm === 2 && (
              <>
                <div className="tp-input">
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    value={values.instagram}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa el usuario de Instagram"
                    id="instagram"
                  />
                  {touched.instagram && <ErrorMsg error={errors.instagram} />}
                </div>
                <div className="tp-input">
                  <label htmlFor="whatsapp">Whatsapp</label>
                  <input
                    value={values.whatsapp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu whatsapp"
                    id="whatsapp"
                  />
                  {touched.whatsapp && <ErrorMsg error={errors.whatsapp} />}
                </div>
                <div className="tp-input">
                  <label htmlFor="description">Facebook</label>
                  <input
                    value={values.facebook}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa el usuario de facebook"
                    id="facebook"
                  />
                  {touched.facebook && <ErrorMsg error={errors.facebook} />}
                </div>

                <div className="tp-input">
                  <label htmlFor="webSitie">Sitio web</label>
                  <input
                    value={values.webSitie}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa el link de tu sitio web"
                    id="webSitie"
                  />
                  {touched.webSitie && <ErrorMsg error={errors.webSitie} />}
                </div>
                <div className="tp-input">
                  <label htmlFor="twitter">Twitter</label>
                  <input
                    value={values.twitter}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa el usuario de twitter"
                    id="twitter"
                  />
                  {touched.twitter && <ErrorMsg error={errors.twitter} />}
                </div>
              </>
            )}
            {sectionForm === 3 && (
              <>
                <div className="tp-input">
                  <label htmlFor="adressFull">Dirección completa</label>
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                    id="adressFull"
                    placeholder="Escribe tu dirección completa"
                  />
                  <div>
                    <ul className="list-group">
                      {status === "OK" &&
                        data.map((sugestion) => (
                          <a
                            key={sugestion.place_id}
                            onClick={handleOnclick(
                              sugestion.description,
                              sugestion.place_id
                            )}
                            className="list-group-item"
                          >
                            {sugestion.description}
                          </a>
                        ))}
                    </ul>
                  </div>
                </div>
                <input
                  value={values.nameAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="hidden"
                  placeholder="Ingresa tu descripción"
                  id="nameAddress"
                />
                <div className="tp-input">
                  <label htmlFor="zipCode">Código postal</label>
                  <input
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu código postal"
                    id="zipCode"
                  />
                  {touched.zipCode && <ErrorMsg error={errors.zipCode} />}
                </div>

                <div className="tp-input">
                  <label htmlFor="colonia">Colonia</label>
                  <input
                    value={values.colonia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu colonia"
                    id="colonia"
                  />
                  {touched.colonia && <ErrorMsg error={errors.colonia} />}
                </div>
                <div className="tp-input">
                  <label htmlFor="street">Calle</label>
                  <input
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu calle"
                    id="street"
                  />
                  {touched.street && <ErrorMsg error={errors.street} />}
                </div>
              </>
            )}
            {sectionForm === 4 && (
              <>
                <div className="tp-input">
                  <label htmlFor="state">Estado</label>
                  <input
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu estado"
                    id="state"
                  />
                  {touched.state && <ErrorMsg error={errors.state} />}
                </div>
                <div className="tp-input">
                  <label htmlFor="delegation">Delegación</label>
                  <input
                    value={values.delegation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu delegación"
                    id="delegation"
                  />
                  {touched.delegation && <ErrorMsg error={errors.delegation} />}
                </div>
                <div className="tp-input">
                  <label htmlFor="numberOutside">Número exterior</label>
                  <input
                    value={values.numberOutside}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu número exterior"
                    id="numberOutside"
                  />
                  {touched.numberOutside && (
                    <ErrorMsg error={errors.numberOutside} />
                  )}
                </div>
                <div className="tp-input">
                  <label htmlFor="innerNumber">Número interior</label>
                  <input
                    value={values.innerNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Ingresa tu número interior"
                    id="innerNumber"
                  />
                  {touched.innerNumber && (
                    <ErrorMsg error={errors.innerNumber} />
                  )}
                </div>
              </>
            )}

            {sectionForm < 4 ? (
              <div className="tp-login-button mb-3">
                <button
                  className="tp-btn-black w-100"
                  type="button"
                  onClick={() => {
                    if (sectionForm === 2) setShowImage(false);
                    setSectionForm(sectionForm + 1);
                  }}
                >
                  Siguiente
                </button>
              </div>
            ) : (
              <div className="tp-login-button mb-3">
                <button className="tp-btn-black w-100" type="submit">
                  Completar registro
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
