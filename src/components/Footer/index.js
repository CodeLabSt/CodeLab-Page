import React from 'react';
import {
  Section,
  Container,
  Title,
  Parrafo,
  Anchor,
  ContactInfo,
  ContainerImages,
} from './styles';
import { GiSmartphone } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Section>
      {/* Primer Container */}
      <Container>
        <Title>Sobre CodeLab</Title>
        <Parrafo>
          Sobre una agencia de marketing digital,
          <br />
          especializada en el area de Diseño Web y<br />
          Diseño Frafico
        </Parrafo>
        <Parrafo>
          Una agencia con ambito nacional e <br /> internacional
        </Parrafo>
      </Container>
      {/* Segundo Container */}
      <Container>
        <Title>Nuestros Servicios</Title>
        <Anchor>Diseño Web</Anchor>
        <Anchor>Diseño Grafico</Anchor>
      </Container>
      {/* Tercer Container */}
      <Container>
        <Title>Contacto</Title>
        <ContactInfo>
          <GiSmartphone />
          (58) 414 755 7915
        </ContactInfo>
        <ContactInfo>
          <AiOutlineMail />
          codelab.webdesign@gmail.com
        </ContactInfo>
        <ContainerImages>
          <FaFacebook />
          <FaInstagram />
        </ContainerImages>
      </Container>
    </Section>
  );
};
