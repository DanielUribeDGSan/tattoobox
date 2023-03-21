import React, { useEffect } from "react";
import { Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import RegisterArea from "./register-area";

const Register = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      {/* <Header /> */}
      {/* <Breadcrumb title={"Registro"} /> */}
      <RegisterArea />
      {/* <FooterThree /> */}
    </Wrapper>
  );
};

export default Register;
