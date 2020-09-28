import React,{useState,useEffect} from 'react';
import {
  Section,
  Title,
  Parr,
  ContainerInfo,
  Formulario,
  Input,
  TextBox,
  Button,
} from './styles';

const Contacto = () => {

  const [showAnimation,setShowAnimation] = useState(false);

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY > 4100 && window.scrollY < 4850;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );

  return (
    <Section id='contacto'>
      <ContainerInfo flag={showAnimation}>
        <Title>Contacto</Title>
        <Parr>
          Ingresa tus datos y te haremos llegar toda la
          <br /> información de nuestros paquetes y servicios.
        </Parr>
      </ContainerInfo>
      <Formulario>
        <Input flag={showAnimation} type='text' placeholder='Nombre' />
        <Input flag={showAnimation} type='text' placeholder='Correo electrónico' />
        <TextBox flag={showAnimation} type='text' placeholder='Describe tu proyecto' />
        <Button flag={showAnimation}>Enviar</Button>
      </Formulario>
    </Section>
  );
};

export default Contacto;