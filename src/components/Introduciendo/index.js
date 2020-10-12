import React, {useState,useEffect} from 'react';
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
import { NavBar } from '../NavbarMobile/index';

const Introduciendo = () => {

  const [showAnimation,setShowAnimation] = useState(false);
  
  useEffect(() => {
      const onScroll = (e) => {
          const newShowAnimation = window.scrollY > 0;
          showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <Section id='inicio'>
      <Container>
        <Header>
          <Img src={Logo} alt='logo' />

          <NavBar flag={showAnimation} />

          <Menu>
            <a href='#inicio'>Inicio</a>
            <a href='#nosotros'>Nosotros</a>
            <a href='#servicios'>Servicios</a>
            <a href='#portafolio'>Proyectos</a>
            <a href='#contacto'>Contacto</a>
          </Menu>
        </Header>
        <SecondContainer>
          <Title >
            <strong>
              Introduciendo <br /> CodeLab
              <br />
              tu alternativa visionaria.
            </strong>
          </Title>
          <Parrafo >
            Nuestra misión es crear proyectos memorables <br /> que impulsen a
            tu marca en el mundo digital.
          </Parrafo>
          <a href='#contacto'>
            <Button >Contáctanos</Button>
          </a>
        </SecondContainer>
      </Container>
    </Section>
  );
};

export default Introduciendo;
