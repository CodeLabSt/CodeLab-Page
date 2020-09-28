import React, { useState , useEffect } from 'react';
import {
  Section,
  SecondContainer,
  FirtsContainer,
  ImgLaptop,
  Title,
  Parraf,
  InfoContainer,
  Subtitle,
  SubParrafo,
  Button,
  FlechaContainer,
  ImgFlecha,
} from './styles';
import Laptop from '../../images/MockupLaptop.png';
import Flecha from '../../images/Flecha.png';
import { Caracteristicas } from '../Caracteristicas/index.js';

const Servicios = () => {
  const [click, setClick] = useState(false);
  const [showAnimation,setShowAnimation] = useState(false);

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY > 1200 && window.scrollY < 2000;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );

  return (
    <>
      <Section id='servicios'>
        <FirtsContainer flag={showAnimation}>
          <Title>Servicios</Title>
          <Parraf>
            Te brindamos Asesoramiento detallado sobre los paquetes <br />y
            servicios que ofrecemos.
          </Parraf>
        </FirtsContainer>
        <SecondContainer>
          <ImgLaptop  flag={showAnimation} src={Laptop} alt='laptop' />
          <InfoContainer flag={showAnimation}>
            <Subtitle>
              Desarrollo y <br />
              Diseño web
            </Subtitle>
            <SubParrafo>
              Creamos la página web de tus <br />
              sueños. El futuro de tu marca <br />
              está en nuestras manos.
            </SubParrafo>
            <a href='#contacto'>
              <Button>Aprender mas</Button>
            </a>
          </InfoContainer>
        </SecondContainer>
        <FlechaContainer onClick={() => setClick(!click)}>
          <ImgFlecha flag={click} src={Flecha} alt='flecha' />
        </FlechaContainer>
      </Section>
      <Caracteristicas flag={click} />
    </>
  );
};

export default Servicios;
