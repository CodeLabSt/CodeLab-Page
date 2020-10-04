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

  useEffect(() => {
    const onScroll = (e) => {
      if(window.outerWidth < 450 && window.scrollY > 3029 && window.scrollY < 3500){
        setShowAnimation(true);
      }else if(window.outerWidth > 460 && window.outerWidth < 850 && window.scrollY > 3761 && window.scrollY < 4400){
        setShowAnimation(true);
      }else if(window.outerWidth > 860  && window.scrollY > 2830 && window.scrollY < 3192){
        setShowAnimation(true);
      }
    };
    document.addEventListener('scroll',onScroll);
    return () => document.removeEventListener('scroll', onScroll);
},[]);

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
