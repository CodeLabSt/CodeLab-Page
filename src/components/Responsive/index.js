import React from 'react';
import IphoneResponsive from '../../images/MockupiPhone.png';
import {
  Section,
  Title,
  Parrafo,
  Button,
  Container,
  ContainerInfor,
} from './styles';

export const Responsive = () => {
  return (
    <Section>
      <Container>
        <img src={IphoneResponsive} alt='iphone' />
        <ContainerInfor>
          <Title>
            Responsive <br /> Design
          </Title>
          <Parrafo>
            Adaptamos tu pagina web a todo <br /> tipo de dispositivo. Creando
            un
            <br />
            acceso fluido y dinamico
          </Parrafo>
          <a href='#contacto'>
            <Button>Contactanos</Button>
          </a>
        </ContainerInfor>
      </Container>
    </Section>
  );
};
