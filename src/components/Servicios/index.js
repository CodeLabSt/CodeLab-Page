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

  useEffect(() => {
    const onScroll = (e) => {
      if(window.outerWidth < 450 && window.outerWidth > 400 && window.scrollY > 1422 && window.scrollY < 2200){
        setShowAnimation(true);
      }else if(window.outerWidth < 400 && window.scrollY > 1380 && window.scrollY < 1978){
        setShowAnimation(true);
      }else if(window.outerWidth > 460 && window.outerWidth < 850 && window.scrollY > 1501 && window.scrollY < 2700){
        setShowAnimation(true);
      }else if(window.outerWidth > 860  && window.scrollY > 1287 && window.scrollY < 2000){
        setShowAnimation(true);
      }
    };
    document.addEventListener('scroll',onScroll);
    return () => document.removeEventListener('scroll', onScroll);
},[]);

  return (
    <>
      <Section id='servicios'>
        <FirtsContainer flag={showAnimation}>
          <Title>Servicios</Title>
          <Parraf>
            Te brindamos asesoramiento detallado sobre los paquetes <br />y
            servicios que ofrecemos.
          </Parraf>
        </FirtsContainer>
        <SecondContainer>
          <ImgLaptop  src={Laptop} alt='laptop' />
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
              <Button>Aprender más</Button>
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
