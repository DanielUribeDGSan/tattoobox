import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import ServicesArea from './services-area';
import { SliderTattoo } from '../../sliders/tattoos/slider-tattoo';
import useTattoboxHomeTattoos from '../../../hooks/use-tattobox-home-tattoos';

const Home = () => {
  const { artist, studies, newest, isLoading, error } =
    useTattoboxHomeTattoos();

  useEffect(() => {
    animationCreate();
  }, []);

  if (!error && isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: '49%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
          height: '100%',
        }}
      />
    );
  }
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <ServicesArea />
      <SliderTattoo
        data={newest}
        loading={isLoading}
        title={'Lo más nuevo'}
      />
      <SliderTattoo
        data={artist}
        loading={isLoading}
        title={'Artistas'}
      />
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
