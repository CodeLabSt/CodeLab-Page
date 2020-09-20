import React, { useState } from 'react';
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

export const Servicios = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Section id='servicios'>
        <FirtsContainer>
          <Title>Servicios</Title>
          <Parraf>
            Te brindamos Asesoramiento detallado sobre los paquetes <br />y
            servicios que ofrecemos.
          </Parraf>
        </FirtsContainer>
        <SecondContainer>
          <ImgLaptop src={Laptop} alt='laptop' />
          <InfoContainer>
            <Subtitle>
              Desarrollo y <br />
              Diseño web
            </Subtitle>
            <SubParrafo>
              Creamos la pagina web de tus <br /> sueños.El futuro de tu marca{' '}
              <br />
              esta en nuestras manos.
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
