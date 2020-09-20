import React from 'react';
import {
  Section,
  FirtsContainer,
  SecondContainer,
  Presentacion,
  Img,
  ContainerImg,
  Title,
  Description,
  InfoContainer,
  FirtsTitle,
  ParafNosot,
} from './styles';
import MiguelVilla from '../../images/MiguelVilla.jpg';
import PabloVilla from '../../images/PabloVilla.jpg';
import JorgeVilla from '../../images/JorgeVilla3.jpg';
import { FaInstagram, FaGithub, FaWhatsapp, FaBehance } from 'react-icons/fa';

export const Nosotros = () => {
  return (
    <Section id='nosotros'>
      <FirtsContainer>
        <FirtsTitle>Nosotros</FirtsTitle>
        <ParafNosot>
          Somos un grupo de tres jovenes Venezolanos emprendedores,
          <br />
          creativos y responsables, con una vision al futuro del mundo digital.
        </ParafNosot>
      </FirtsContainer>
      <SecondContainer>
        {/* Miguel */}
        <Presentacion Image={MiguelVilla}>
          <InfoContainer>
            <Title>
              <i>
                Miguel <br /> Villamizar
              </i>
            </Title>
            <Description>
              Diseñador <br /> Grafico
            </Description>
          </InfoContainer>
          <ContainerImg>
            <FaInstagram />
            <FaBehance />
            <FaWhatsapp />
          </ContainerImg>
        </Presentacion>
        {/* Pablo */}
        <Presentacion Image={PabloVilla}>
          <InfoContainer>
            <Title>
              <i>
                Pablo <br /> Villamizar
              </i>
            </Title>
            <Description>
              Desarrollador <br /> Web
            </Description>
          </InfoContainer>
          <ContainerImg>
            <FaInstagram />
            <FaGithub />
            <FaWhatsapp />
          </ContainerImg>
        </Presentacion>
        {/* Jorge */}
        <Presentacion Image={JorgeVilla}>
          <InfoContainer>
            <Title>
              <i>
                Jorge <br /> Villamizar
              </i>
            </Title>
            <Description>
              Desarrollador <br /> Web
            </Description>
          </InfoContainer>
          <ContainerImg>
            <FaInstagram />
            <FaGithub />
            <FaWhatsapp />
          </ContainerImg>
        </Presentacion>
      </SecondContainer>
    </Section>
  );
};
