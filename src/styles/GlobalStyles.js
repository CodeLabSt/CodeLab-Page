// para poder usar los estilos de forma global
import { createGlobalStyle } from 'styled-components';

// componente global para toda la app
export const GlobalStyles = createGlobalStyle`

    h1, h2, h3{
        font-family: 'Roboto', sans-serif;
    }

    html{
        font-family: 'Montserrat', sans-serif;
    }

    body {
        height: 100%;
        margin: 0;
        padding:0;
        width: 100%;
        overflow-x:hidden;
        background:transparent;
        /* overscroll-behavior: none; */
    }

`;
