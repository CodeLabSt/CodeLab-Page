import React from 'react';
import {
  Section,
  Container,
  Title,
  Parrafo,
  Anchor,
  ContactInfo,
  ContainerImages,
  MediumContainer
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
          Somos una agencia de marketing digital, especializada en el área de Diseño Web y Diseño Gráfico.
        </Parrafo>
        <Parrafo>
          Una agencia con ámbito nacional e  <br />
          internacional.
        </Parrafo>
      </Container>
      {/* Segundo Container */}
      <MediumContainer>
        <Title>Nuestros Servicios</Title>
        <Anchor href='#servicios'>Diseño Web</Anchor>
        <Anchor href='#diseño-grafico'>Diseño Gráfico</Anchor>
      </MediumContainer>
      {/* Tercer Container */}
      <Container>
        <Title>Contacto</Title>
        <ContactInfo>
          <GiSmartphone />
          (58) 414 755 7915
        </ContactInfo>
        <ContactInfo>
          <AiOutlineMail />
          <a href="mailto:codelab.webdesign@gmail.com?subject=Solicito mas información sobre la oportunidad de negocio. &body=Hola! te contacto desde tu pagina web y quiero saber mas sobre paquetes y servicios." target="_blank">
            codelab.webdesign@gmail.com
          </a>
        </ContactInfo>
        <ContainerImages>
          <a href="https://www.facebook.com/codelab.studio" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/codelab.studio/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://github.com/CodeLabSt" target="_blank">
            <FaGithub />
          </a>
        </ContainerImages>
      </Container>
    </Section>
  );
};
