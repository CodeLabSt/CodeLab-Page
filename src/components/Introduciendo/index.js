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

const Introduciendo = () => {

  const [showAnimation,setShowAnimation] = useState(false);

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY < 280;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );

  return (
    <Section id='inicio'>
      <Container flag={showAnimation}>
        <Header>
          <Img src={Logo} alt='logo' flag={showAnimation} />

          <Menu flag={showAnimation}>
            <a href='#inicio'>Inicio</a>
            <a href='#nosotros'>Nosotros</a>
            <a href='#servicios'>Servicios</a>
            <a href='#portafolio'>Portafolio</a>
            <a href='#contacto'>Contacto</a>
          </Menu>
        </Header>
        <SecondContainer>
          <Title flag={showAnimation} >
            <strong>
              Introduciendo <br /> CodeLab
              <br />
              tu alternativa visionaria.
            </strong>
          </Title>
          <Parrafo flag={showAnimation} >
            Nuestra misión es crear proyectos memorables que <br /> impulsen a
            tu marca en el mundo digital.
          </Parrafo>
          <a href='#contacto'>
            <Button flag={showAnimation} >Contáctanos</Button>
          </a>
        </SecondContainer>
      </Container>
    </Section>
  );
};

export default Introduciendo;
