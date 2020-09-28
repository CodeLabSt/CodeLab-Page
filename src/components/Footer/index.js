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
import { FaInstagram, FaFacebook,FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Section>
      {/* Primer Container */}
      <Container>
        <Title>Sobre CodeLab</Title>
        <Parrafo>
          Sobre una agencia de marketing digital, especializada en el área de Diseño Web y Diseño Gráfico.
        </Parrafo>
        <Parrafo>
          Una agencia con ámbito nacional e  <br />
          internacional.
        </Parrafo>
      </Container>
      {/* Segundo Container */}
      <Container>
        <Title>Nuestros Servicios</Title>
        <Anchor href='#servicios'>Diseño Web</Anchor>
        <Anchor href='#diseño-grafico'>Diseño Grafico</Anchor>
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
          <a href="https://www.facebook.com/codelab.studio">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/codelab.studio/">
            <FaInstagram />
          </a>
          <a href="https://github.com/CodeLabSt">
            <FaGithub />
          </a>
        </ContainerImages>
      </Container>
    </Section>
  );
};
