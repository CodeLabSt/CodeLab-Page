import styled, { css,keyframes } from 'styled-components';
import {fadeIn,zoomInDown,slideInDown} from 'react-animations';

const ZommIn = keyframes`${zoomInDown}`;
const Bounce = keyframes`${fadeIn}`;
const SlideInDown = keyframes`${slideInDown}`;

export const Section = styled.section`
  width: 100%;
  height: 500px;

  ${(props) =>
    props.bandera
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-align: center;
          /* background: blue; */
          flex-direction: column;
        `
      : css`
          display: none;
        `}
  @media(max-width:1000px){
    height:1350px;
  }
  @media(max-width:550px){
    height:1100px;
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  ${(props) =>
    props.bandera
    && css`
        animation:1s ${ZommIn};
      `}
  @media(max-width:1000px){
    height:85%;
    width:100%;
    flex-direction:column;
    justify-content:center;
  }
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  margin: 0;
  @media(max-width:550px){
    height: 50px;
    width: 50px;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 70px;
  margin: 0;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  /* position: relative;
  top: -30px; */
  ${(props) =>
    props.bandera
    && css`
        animation:1s ${SlideInDown};
      `}
  @media(max-width:600px){
    font-size:55px;
  }
  @media(max-width:500px){
    font-size:45px;
    background-size: 75% 4px;
  }
  @media(max-width:500px){
    font-size:35px;
    background-size: 75% 2px;
    margin:15px 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 115px;
  width: 115px;
  border-radius: 50%;
  background: linear-gradient(to right, #3fff7c, #3ffbe0);
  /* background: rgba(0, 0, 0, 0.2); */
  @media(max-width:550px){
    height: 95px;
    width: 95px;
  }
  @media(max-width:460px){
    height: 80px;
    width: 80px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  height: 100%;
  flex-wrap: wrap;
  margin: 15px 0;
  @media(max-width:1000px){
    margin:15px;
    height:30%;
    width:70%;
  }
`;

export const Subtitle = styled.h3`
  font-size: 25px;
  margin: 10px 0;
  color: black;
  @media(max-width:800px){
    font-size:20px;
  }
  @media(max-width:400px){
    font-size:18px;
  }
`;

export const InfoParrafo = styled.p`
  font-size: 18px;
  margin: 0;
  color: black;
  @media(max-width:800px){
    font-size:16px;
  }
  @media(max-width:540px){
    font-size:14px;
  }
`;
