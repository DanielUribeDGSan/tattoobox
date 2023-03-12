import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioItems from "./portfolio-items";

const PortfolioThree = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={"Encuentra tu tatuaje"} />
      <PortfolioItems />
      <FooterThree />
    </Wrapper>
  );
};

export default PortfolioThree;
