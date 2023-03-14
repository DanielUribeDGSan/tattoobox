import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import TattoItems from "./tattoo-items";

const TattooMain = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={"Encuentra tu tatuaje"} />
      <TattoItems />
      {/* <FooterThree /> */}
    </Wrapper>
  );
};

export default TattooMain;
