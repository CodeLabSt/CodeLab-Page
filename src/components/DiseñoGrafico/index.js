import React, { useState } from 'react';
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

export const DiseñoGrafico = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Section>
        <Container>
          <InfoContainer>
            <Title>
              Diseño <br /> Grafico
            </Title>
            <TextParr>
              Modernizamos tu marca <br /> en todos los ambitos. Creamos <br />
              diseños frescos y minimalistas.
            </TextParr>
            <a href='#contacto'>
              <Button>Aprender mas</Button>
            </a>
          </InfoContainer>
          <ImgTablet src={Tablet} alt='tablet' />
        </Container>
        <FlechaContainer onClick={() => setClick(!click)}>
          <ImgFlecha flag={click} src={Flecha} alt='flecha' />
        </FlechaContainer>
      </Section>
      <CaracteristicasDiseño flag={click} />
    </>
  );
};
