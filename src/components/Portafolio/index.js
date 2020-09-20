import React from 'react';
import Flecha from '../../images/Flecha.png';
import {
  Section,
  FlechaContainer,
  FirtsContainer,
  SecondContainer,
  Title,
  InfoParrafo,
} from './styles';
import Easybank from '../../images/Captures Paginas/Easybank1.png';
import EasyFooter from '../../images/Captures Paginas/Easybank2.png';
import Shorty from '../../images/Captures Paginas/shorty.png';

export const Portafolio = () => {
  return (
    <Section id='portafolio'>
      <FirtsContainer>
        <Title>Portafolio</Title>
        <InfoParrafo>
          Nuestro portafolio habla por nosotros, nuestro compromiso
          <br />
          es crear proyectos de alta calidad
        </InfoParrafo>
      </FirtsContainer>
      <SecondContainer>
        <FlechaContainer>
          <img width='50px' height='50px' src={Flecha} />
        </FlechaContainer>
        <div></div>
        <FlechaContainer>
          <img width='50px' height='50px' src={Flecha} />
        </FlechaContainer>
      </SecondContainer>
    </Section>
  );
};
