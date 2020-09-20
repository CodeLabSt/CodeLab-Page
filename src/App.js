import React from 'react';
import { Introduciendo } from './components/Introduciendo/index.js';
import { Nosotros } from './components/Nosotros/index.js';
import { Servicios } from './components/Servicios/index.js';
import { GlobalStyles } from './styles/GlobalStyles';
import { DiseñoGrafico } from './components/DiseñoGrafico/index.js';
import { Responsive } from './components/Responsive/index.js';
import { Contacto } from './components/Contacto/index.js';
import { Footer } from './components/Footer/index.js';
import { Portafolio } from './components/Portafolio/index.js';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Introduciendo />
      <Nosotros />
      <Servicios />
      <DiseñoGrafico />
      <Responsive />
      <Portafolio />
      <Contacto />
      <Footer />
    </>
  );
};
