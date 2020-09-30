import React from 'react';
import IconPWeb from '../../images/iconos/television.png';
import IconLaptop from '../../images/iconos/laptop.png';
import IconShop from '../../images/iconos/shop.png';
import IconLoupe from '../../images/iconos/loupe.png';
import IconPayment from '../../images/iconos/payment.png';
import IconIdiomas from '../../images/iconos/internet.png';
import IconVideo from '../../images/iconos/video.png';
import IconForm from '../../images/iconos/contact-form.png';
import {
  SectionC,
  Icon,
  Title,
  ContainerRows,
  IconContainer,
  InfoContainer,
  InfoParrafo,
  InfoTitle,
} from './styles';

export const Caracteristicas = ({ flag }) => {
  return (
    <SectionC bandera={flag ? true : false}>
      <Title bandera={flag ? true : false}> Características </Title>
      <ContainerRows bandera={flag ? true : false}>
        {/* primercontainer-1 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconPWeb} alt='icon' />
          </IconContainer>
          <InfoTitle>
            Página  Web <br /> Tradicional
          </InfoTitle>
          <InfoParrafo>
            Creamos la página ideal <br /> para tu emprendimiento <br /> nuevo o
            para tu uso <br /> personal.
          </InfoParrafo>
        </InfoContainer>
        {/* primercontainer-2 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconLaptop} alt='icon' />
          </IconContainer>
          <InfoTitle>
            Página Web <br /> Profesional
          </InfoTitle>
          <InfoParrafo>
            Diseñamos una página <br /> web a la talla de tu <br /> marca. Con
            diseño <br /> personalizado a tu medida.
          </InfoParrafo>
        </InfoContainer>
        {/* primercontainer-3 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconShop} alt='icon' />
          </IconContainer>
          <InfoTitle>
            Tienda <br /> Online
          </InfoTitle>
          <InfoParrafo>
            Creamos la Tienda <br /> Online a la medida <br /> para tu negocio,
            con carrito <br /> y métodos de pago online.
          </InfoParrafo>
        </InfoContainer>
        {/* primercontainer-4 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconLoupe} alt='icon' />
          </IconContainer>
          <InfoTitle>
            Posicionamiento
            <br /> SEO
          </InfoTitle>
          <InfoParrafo>
            Paginas optimizadas <br /> para tener un mayor <br /> desempeño en
            los
            <br /> buscadores web.
          </InfoParrafo>
        </InfoContainer>
      </ContainerRows>
      {/* segundo Container */}
      <ContainerRows bandera={flag ? true : false}>
        {/* segundoContainer-1 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconPayment} alt='icon' />
          </IconContainer>
          <InfoTitle>
             Métodos  <br /> de Pago
          </InfoTitle>
          <InfoParrafo>
            Creamos páginas web <br /> con acceso al banco <br /> de tu
            preferencia, ideal
            <br /> para tu e-commerce.
          </InfoParrafo>
        </InfoContainer>
        {/* segundoContainer-2 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconIdiomas} alt='icon' />
          </IconContainer>
          <InfoTitle>
             Múltiples  <br /> Idiomas
          </InfoTitle>
          <InfoParrafo>
            Adaptamos tu <br /> plataforma al idioma <br /> que desees, somos
            una
            <br /> plataforma multilingüe.
          </InfoParrafo>
        </InfoContainer>
        {/* segundoContainer-3 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconVideo} alt='icon' />
          </IconContainer>
          <InfoTitle>
            Tecnología  <br /> Multimedia
          </InfoTitle>
          <InfoParrafo>
            Creamos una experiencia única <br /> para tu sitio web. <br />
            Con capacidad de incluir <br /> audios, videos, podcasts y más.
          </InfoParrafo>
        </InfoContainer>
        {/* segundoContainer-4 */}
        <InfoContainer>
          <IconContainer>
            <Icon src={IconForm} alt='icon' />
          </IconContainer>
          <InfoTitle>Formularios</InfoTitle>
          <InfoParrafo>
            Incluimos formularios <br /> de contacto que facilitan <br /> la
            comunicación con tus <br /> clientes.
          </InfoParrafo>
        </InfoContainer>
      </ContainerRows>
    </SectionC>
  );
};
