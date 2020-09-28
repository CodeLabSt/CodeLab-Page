import React, { Suspense } from 'react';
import  Spinner  from '../spinner/Spinner.js';

const Introduciendo = React.lazy(() => import('../components/Introduciendo/index.js'));
const Nosotros = React.lazy(() => import('../components/Nosotros/index.js'));
const Servicios = React.lazy(() => import('../components/Servicios/index.js'));
const DiseñoGrafico = React.lazy(() => import('../components/DiseñoGrafico/index.js'));
const Responsive = React.lazy(() => import('../components/Responsive/index.js'));
const Contacto = React.lazy(() => import('../components/Contacto/index.js'));
const Portafolio = React.lazy(() => import('../components/Portafolio/index.js'));

import { Footer } from '../components/Footer/index.js';

const Home = () => {
    return(
        <>  
            <Suspense fallback={<Spinner />}>
                <Introduciendo />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <Nosotros />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <Servicios />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <DiseñoGrafico />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <Responsive />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <Portafolio />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <Contacto />
            </Suspense>
            <Footer />
        </>
    )
}

export default Home;