import React from 'react';
import {
  Section,
  Container,
  Header,
  Img,
  Menu,
  Title,
  Parrafo,
  Button,
  SecondContainer,
} from './styles';
import Logo from '../../images/LogoBlancoPng.png';

export const Introduciendo = () => {
  return (
    <Section id='inicio'>
      <Container>
        <Header>
          <Img src={Logo} alt='logo' />

          <Menu>
            <a href='#inicio'>Inicio</a>
            <a href='#nosotros'>Nosotros</a>
            <a href='#servicios'>Servicios</a>
            <a href='#portafolio'>Portafolio</a>
            <a href='#contacto'>Contacto</a>
          </Menu>
        </Header>
        <SecondContainer>
          <Title>
            Introduciendo <br /> CodeLab
            <br />
            tu alternativa visionaria.
          </Title>
          <Parrafo>
            Nuestra mision es crear proyectos memorables que <br /> impulsen a
            tu marca en el mundo digital.
          </Parrafo>
          <a href='#contacto'>
            <Button>Contactanos</Button>
          </a>
        </SecondContainer>
      </Container>
    </Section>
  );
};
