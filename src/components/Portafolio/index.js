import React , { useState , useEffect } from 'react';
import Flecha from '../../images/Flecha.png';
import {
  Section,
  FlechaContainerRight,
  FlechaContainerLeft,
  FirtsContainer,
  Title,
  ContainerImages,
  ImgFlechaLeft,
  ImgFlechaRight
} from './styles';

import Cap1 from '../../images/CapturesPaginas/Cap1.png';
import Cap2 from '../../images/CapturesPaginas/Cap2.png';
import Cap3 from '../../images/CapturesPaginas/Cap3.png';
import Cap4 from '../../images/CapturesPaginas/Cap4.png';
import Cap5 from '../../images/CapturesPaginas/Cap5.png';
import Cap6 from '../../images/CapturesPaginas/Cap6.png';
import Cap7 from '../../images/CapturesPaginas/Cap7.png';
import Cap8 from '../../images/CapturesPaginas/Cap8.png';
import Cap10 from '../../images/CapturesPaginas/Cap10.png';

export const Portafolio = () => {

  const [focus,setFocus] = useState(0);

  const images = [
    Cap1,
    Cap2,
    Cap3,
    Cap4,
    Cap5,
    Cap6,
    Cap7,
    Cap8,
    Cap10,    
  ]

  const tabLeft = () => {
    let images = document.getElementById('slider').querySelectorAll('img')
    if((Math.abs(focus - 100)) < (images.length * 100)){
      images.forEach(img => {
        img.style.transform = `translateX(${focus - 100}%)`
      })
      // document.getElementById('slider').style.transform = `translateX(${focus - 100}%)`
      setFocus(focus - 100)
    }
  }

  const tabRight = () => {
    let images = document.getElementById('slider').querySelectorAll('img')
    if((focus + 100) <= 0){
      images.forEach(img => {
        img.style.transform = `translateX(${focus + 100}%)`
      })
      // document.getElementById('slider').style.transform = `translateX(${focus + 100}%)`
      setFocus(focus + 100)
    }
  }

  return (
    <Section id='portafolio'>
        <FirtsContainer>
          <Title>Proyectos</Title>
        </FirtsContainer>
        <FlechaContainerRight onClick={tabRight}>
          <ImgFlechaLeft 
            src={Flecha} 
          />
        </FlechaContainerRight>
        <FlechaContainerLeft onClick={tabLeft}>        
          <ImgFlechaRight 
            src={Flecha} 
          />
        </FlechaContainerLeft>
      <ContainerImages id='slider'>
          {
            images.map(img => <img 
                                  key={images.indexOf(img)}
                                  src={img} 
                                  style={{
                                    width: '100%',
                                    minWidth: '100%',
                                    height: '100%',
                                    transition: 'all 500ms ease-in-out'
                                  }}
                                />)
          }
      </ContainerImages>
    </Section>
  );
};

export default Portafolio;