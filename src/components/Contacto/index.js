import React from 'react';
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

export const Contacto = () => {
  return (
    <Section id='contacto'>
      <ContainerInfo>
        <Title>Contacto</Title>
        <Parr>
          Ingresa tus datos y te haremos llegar toda la
          <br /> informacion de nuestros paquetes y servicios.
        </Parr>
      </ContainerInfo>
      <Formulario>
        <Input type='text' placeholder='Nombre' />
        <Input type='text' placeholder='Correo Electronico' />
        <TextBox type='text' placeholder='Describe tu proyecto' />
        <Button>Enviar</Button>
      </Formulario>
    </Section>
  );
};
