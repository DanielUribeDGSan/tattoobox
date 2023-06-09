import React, { useEffect } from "react";
import { useUser } from "../../hooks/use-user";
import { Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import RegisterArea from "./register-area";

const Register = () => {
  const { verifyLoggedUser } = useUser();
  verifyLoggedUser();

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
