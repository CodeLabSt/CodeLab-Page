import React, {useState,useEffect} from 'react';
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

const Nosotros = () => {

  const [showAnimation,setShowAnimation] = useState(false);

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY > 695 && window.scrollY < 1200;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );
    
  return (
    <Section id='nosotros'>
      <FirtsContainer>
        <FirtsTitle flag={showAnimation}>Nosotros</FirtsTitle>
        <ParafNosot >
          Somos un grupo de tres jóvenes Venezolanos emprendedores,
          <br />
          creativos y responsables, con una visión al futuro del mundo digital.
        </ParafNosot>
      </FirtsContainer>
      <SecondContainer>
        {/* Miguel */}
        <Presentacion Image={MiguelVilla}>
          <InfoContainer flag={showAnimation}>
            <Title>
              <i>
                Miguel <br /> Villamizar
              </i>
            </Title>
            <Description flag={showAnimation}>
              Diseñador <br /> Grafico
            </Description>
          </InfoContainer>
          <ContainerImg flag={showAnimation}>
            <a href="https://www.instagram.com/miguelvilllamizar/" target="_blank">
              <FaInstagram/>
            </a>
            <a>
              <FaBehance />
            </a>
            <a href="https://wa.link/r3y8sf" target="_blank">
              <FaWhatsapp />
            </a>
          </ContainerImg>
        </Presentacion>
        {/* Pablo */}
        <Presentacion Image={PabloVilla}>
          <InfoContainer flag={showAnimation}>
            <Title>
              <i>
                Pablo <br /> Villamizar
              </i>
            </Title>
            <Description flag={showAnimation}>
              Desarrollador <br /> Web
            </Description>
          </InfoContainer>
          <ContainerImg flag={showAnimation}>
            <a href="https://www.instagram.com/pablo.m58/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/pablom58" target="_blank">
              <FaGithub />
            </a>
            <a href="https://wa.link/l12mfa" target="_blank">
              <FaWhatsapp />
            </a>
          </ContainerImg>
        </Presentacion>
        {/* Jorge */}
        <Presentacion Image={JorgeVilla}>
          <InfoContainer flag={showAnimation}>
            <Title>
              <i>
                Jorge <br /> Villamizar
              </i>
            </Title>
            <Description  flag={showAnimation}>
              Desarrollador <br /> Web
            </Description>
          </InfoContainer>
          <ContainerImg flag={showAnimation}>
            <a href="https://www.instagram.com/jorgelvillamizar/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/Jorgevillamizar10" target="_blank">
              <FaGithub />
            </a>
            <a href="https://wa.link/8f9uud" target="_blank">
              <FaWhatsapp />
            </a>
          </ContainerImg>
        </Presentacion>
      </SecondContainer>
    </Section>
  );
};

export default Nosotros;
