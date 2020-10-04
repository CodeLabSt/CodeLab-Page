import React , { useState , useEffect } from 'react';
import Flecha from '../../images/Flecha.png';
import {
  Section,
  FlechaContainerRight,
  FlechaContainerLeft,
  FirtsContainer,
  SecondContainer,
  Title,
  InfoParrafo,
  Slider,
  ContainerImages,
  ImgFlechaLeft,
  ImgFlechaRight
} from './styles';

import Cap1 from '../../images/CapturesPaginas/Cap1.png'
import Cap2 from '../../images/CapturesPaginas/Cap2.png'
import Cap3 from '../../images/CapturesPaginas/Cap3.png'
import Cap4 from '../../images/CapturesPaginas/Cap4.png'
import Cap5 from '../../images/CapturesPaginas/Cap5.png'

export const Portafolio = () => {

  const [focus,setFocus] = useState(0);
  const [showAnimation,setShowAnimation] = useState(false);

  const images = [
    Cap1,
    Cap2,
    Cap3,
    Cap4,
    Cap5,
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

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY > 3200 && window.scrollY < 4100;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );

  return (
    <Section id='portafolio'>
        <FirtsContainer flag={showAnimation}>
          <Title>Portafolio</Title>
        </FirtsContainer>
        <FlechaContainerRight onClick={tabRight} flag={showAnimation}>
          <ImgFlechaLeft 
            src={Flecha} 
          />
        </FlechaContainerRight>
        <FlechaContainerLeft onClick={tabLeft} flag={showAnimation}>        
          <ImgFlechaRight 
            src={Flecha} 
          />
        </FlechaContainerLeft>
      <ContainerImages flag={showAnimation} id='slider'>
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