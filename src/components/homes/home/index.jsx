import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import CreativeArea from "./creative-area";
import HeroArea from "./hero-area";
import NewsLetter from "./news-letter";
import ProjectArea from "./project-area";
import ServicesArea from "./services-area";
import { SliderTattoo } from "../../sliders/tattoos/slider-tattoo";
import useTattoboxHomeTattoos from "../../../hooks/use-tattobox-home-tattoos";
import Slider3D from "../../sliders/3d/slider3d";

const Home = () => {
  const { artist, studies, newest, isLoading } = useTattoboxHomeTattoos();

  // console.log(isLoading);

  useEffect(() => {
    animationCreate();
  }, []);
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <ServicesArea />
      <SliderTattoo data={newest} loading={isLoading} title={"Lo más nuevo"} />
      {/* <SliderTattoo data={artist} loading={isLoading} title={"Artistas"} />
      <SliderTattoo data={studies} loading={isLoading} title={"Estudios"} /> */}
      <CreativeArea />
      {/* <BrandArea/>    */}
      {/* <ProjectArea /> */}
      {/* <Testimonial /> */}
      {/* <BlogArea/> */}
      {/* <NewsLetter /> */}
      <FooterThree />
    </Wrapper>
  );
};

export default Home;
