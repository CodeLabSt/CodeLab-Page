import React from 'react';
import Vector from '../../images/iconos/vector.png';
import Flyers from '../../images/iconos/layers.png';
import Iphone from '../../images/iconos/smartphone.png';
import {
  Section,
  Container,
  Img,
  Title,
  IconContainer,
  InfoContainer,
  Subtitle,
  InfoParrafo,
} from './styles';

export const CaracteristicasDiseño = ({ flag }) => {
  return (
    <Section bandera={flag ? true : false}>
      <Title bandera={flag ? true : false}>Caractetisticas</Title>
      <Container bandera={flag ? true : false}>
        {/* Primero */}
        <InfoContainer>
          <IconContainer>
            <Img src={Vector} alt='icon' />
          </IconContainer>
          <Subtitle>
            Diseño <br />
            de Logos
          </Subtitle>
          <InfoParrafo>
            Diseñamos logos
            <br /> memorables y unicos,
            <br /> que representaran a tu
            <br />
            marca de la mejor manera
          </InfoParrafo>
        </InfoContainer>
        {/* Segundo */}
        <InfoContainer>
          <IconContainer>
            <Img src={Flyers} alt='icon' />
          </IconContainer>
          <Subtitle>
            Diseño <br />
            de Flyers
          </Subtitle>
          <InfoParrafo>
            Creamos diseños para todo
            <br />
            tipo de marcas,desde
            <br />
            banners, tarjetas de
            <br />
            presentacion, flyers y mas.
          </InfoParrafo>
        </InfoContainer>
        {/* Tercero */}
        <InfoContainer>
          <IconContainer>
            <Img src={Iphone} alt='icon' />
          </IconContainer>
          <Subtitle>
            Post para <br />
            Redes Sociales
          </Subtitle>
          <InfoParrafo>
            Gestionamos la direccion de arte <br /> ideal para tu marca, creando
            <br />
            contenido que la impulsara
            <br />
            en el mundo digital.
          </InfoParrafo>
        </InfoContainer>
      </Container>
    </Section>
  );
};
