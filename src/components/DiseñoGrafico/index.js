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

  useEffect(() => {
    const onScroll = (e) => {
      if(window.outerWidth < 450 && window.scrollY > 2341 && window.scrollY < 2905){
        setShowAnimation(true);
      }else if(window.outerWidth < 400 && window.scrollY > 2103 && window.scrollY < 2532){
        setShowAnimation(true);
      }else if(window.outerWidth > 460 && window.outerWidth < 850 && window.scrollY > 2841 && window.scrollY < 3548){
        setShowAnimation(true);
      }else if(window.outerWidth > 860  && window.scrollY > 2138 && window.scrollY < 2619){
        setShowAnimation(true);
      }
    };
    document.addEventListener('scroll',onScroll);
    return () => document.removeEventListener('scroll', onScroll);
},[]);

  return (
    <>
      <Section id='diseño-grafico'>
        <Container>
          <InfoContainer flag={showAnimation}>
            <Title>
              Diseño <br /> Gráfico 
            </Title>
            <TextParr>
              Modernizamos tu marca <br /> en todos los ámbitos.<br /> Creamos 
              diseños frescos y minimalistas.
            </TextParr>
            <a href='#contacto'>
              <Button>Aprender más</Button>
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