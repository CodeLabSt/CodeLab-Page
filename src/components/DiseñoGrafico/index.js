import React, { useState , useEffect } from 'react';
import Tablet from '../../images/MockupTablet.png';
import Flecha from '../../images/Flecha.png';
import {
  Section,
  FlechaContainer,
  Container,
  Title,
  TextParr,
  Button,
  ImgTablet,
  InfoContainer,
  ImgFlecha,
} from './styles';
import { CaracteristicasDiseño } from '../ExtendsCaracDiseño/index.js';

const DiseñoGrafico = () => {
  const [click, setClick] = useState(false);
  const [showAnimation,setShowAnimation] = useState(false);

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY > 2000 && window.scrollY < 2700;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );

  return (
    <>
      <Section id='diseño-grafico'>
        <Container>
          <InfoContainer flag={showAnimation}>
            <Title>
              Diseño <br /> Grafico
            </Title>
            <TextParr>
              Modernizamos tu marca <br /> en todos los ámbitos. Creamos <br />
              diseños frescos y minimalistas.
            </TextParr>
            <a href='#contacto'>
              <Button>Aprender mas</Button>
            </a>
          </InfoContainer>
          <ImgTablet flag={showAnimation} src={Tablet} alt='tablet' />
        </Container>
        <FlechaContainer onClick={() => setClick(!click)}>
          <ImgFlecha flag={click} src={Flecha} alt='flecha' />
        </FlechaContainer>
      </Section>
      <CaracteristicasDiseño flag={click} />
    </>
  );
};

export default DiseñoGrafico;