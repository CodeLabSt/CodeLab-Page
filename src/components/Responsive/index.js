import React,{useState,useEffect} from 'react';
import IphoneResponsive from '../../images/MockupiPhone.png';
import {
  Section,
  Title,
  Parrafo,
  Button,
  Container,
  ContainerInfor,
} from './styles';

const Responsive = () => {

  const [showAnimation,setShowAnimation] = useState(false);

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY > 2700 && window.scrollY < 3200;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );

  return (
    <Section>
      <Container flag={showAnimation}>
        <img src={IphoneResponsive} alt='iphone' />
        <ContainerInfor flag={showAnimation} >
          <Title>
            Responsive <br /> Design
          </Title>
          <Parrafo>
            Adaptamos tu página web a todo tipo de dispositivo.<br />
            Creando un acceso fluido y dinámico.
          </Parrafo>
          <a href='#contacto'>
            <Button flag={showAnimation}>Contáctanos</Button>
          </a>
        </ContainerInfor>
      </Container>
    </Section>
  );
};

export default Responsive;
