import React , { useState } from 'react';
import Flecha from '../../images/Flecha.png';
// import {
//   Section,
//   FlechaContainer,
//   FirtsContainer,
//   SecondContainer,
//   Title,
//   InfoParrafo,
//   Slider
// } from './styles';
// import Easybank from '../../images/Captures Paginas/Easybank1.png';
// import EasyFooter from '../../images/Captures Paginas/Easybank2.png';
// import Shorty from '../../images/Captures Paginas/shorty.png';

import Cap1 from '../../images/CapturesPaginas/Cap1.png'
import Cap2 from '../../images/CapturesPaginas/Cap2.png'
import Cap3 from '../../images/CapturesPaginas/Cap3.png'
import Cap4 from '../../images/CapturesPaginas/Cap4.png'
import Cap5 from '../../images/CapturesPaginas/Cap5.png'

export const Portafolio = () => {

  const [focus,setFocus] = useState(0)

  const images = [
    Cap1,
    Cap2,
    Cap3,
    Cap4,
    Cap5,
  ]

  const tabLeft = () => {
    if((Math.abs(focus - 100)) < (images.length * 100)){
      document.getElementById('slider').style.transform = `translateX(${focus - 100}%)`
      setFocus(focus - 100)
    }
  }

  const tabRight = () => {
    if((focus + 100) <= 0){
      document.getElementById('slider').style.transform = `translateX(${focus + 100}%)`
      setFocus(focus + 100)
    }
  }

  return (
    <section 
      id='portafolio'
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div>
        <h2
          style={{
            color: 'black',
            fontSize: '70px',
            margin: '5px 0',
            background: 'linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat',
            backgroundSize: '75% 8px',
          }}
        >Portafolio</h2>
      </div>
      <img 
        src={Flecha} 
        style={{
          position: 'absolute',
          transform: 'rotateY(180deg)',
          left: '15px',
          top: '35%',
          zIndex: '15'
        }}
        onClick={tabRight}
      />
      <img 
        src={Flecha} 
        style={{
          position: 'absolute',
          left: '85%',
          zIndex: '15',
          top: '35%'
        }}
        onClick={tabLeft} 
      />
      <div
        style={{
          minWidth: '100%',
          height: '90%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          position: 'relative',
          transition: 'all 500ms ease-in-out'
        }}
        id='slider'
      >
        {
          images.map(img => <img 
                                key={images.indexOf(img)}
                                src={img} 
                                style={{
                                  width: '100%',
                                  minWidth: '100%',
                                  height: '100%'
                                }}
                              />)
        }
      </div>

      {/* <SecondContainer>
        <FirtsContainer>
          <Title>Portafolio</Title>
          <InfoParrafo>
            Nuestro portafolio habla por nosotros, nuestro compromiso
            <br />
            es crear proyectos de alta calidad
          </InfoParrafo>
        </FirtsContainer>
        <FlechaContainer>
          <img width='50px' height='50px' src={Flecha} />
        </FlechaContainer>
        <Slider>
          sdnvlsdkvn
        </Slider>
        <FlechaContainer>
          <img width='50px' height='50px' src={Flecha} />
        </FlechaContainer>
      </SecondContainer> */}
    </section>
  );
};
