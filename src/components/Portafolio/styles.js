import styled,{css,keyframes} from 'styled-components';
import {fadeInLeft,zoomInLeft,zoomInRight,fadeInRight} from 'react-animations';

const FadeInLeft = keyframes`${fadeInLeft}`;
const ZoomInLeft = keyframes`${zoomInLeft}`;
const ZoomInRight = keyframes`${zoomInRight}`;
const FadeInRight = keyframes`${fadeInRight}`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  /* background:red; */
`;

export const FlechaContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  /* position: Relative;
  top: -25px; */
  z-index: 15;
  cursor: pointer;
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  left: 130px;
  top: 55%;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${ZoomInRight};
    `}
`;

export const FlechaContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  /* position: Relative;
  top: -25px; */
  z-index: 15;
  cursor: pointer;
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  left: 85%;
  top: 55%;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${ZoomInLeft};
    `}
`;

export const ImgFlechaLeft = styled.img`
  width:45px;
  height:45px;
  transform: rotateY(180deg);
`;

export const ImgFlechaRight = styled.img`
  width:45px;
  height:45px;
  position: absolute;
  z-index: 15;
`;

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  flex-wrap: wrap;
  margin: 0;
  /* background: blue; */
  width: 100%;
  height: 10%;
  position:relative;
  top:-15px;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${FadeInLeft};
    `}
`;

export const Title = styled.h1`
  color: black;
  font-size: 70px;
  margin:5px 0;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  /* position:Relative;
  top:20px; */
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: black;
  flex-wrap: wrap;
  margin: 0;
  /* background: green; */
  width: 100%;
  height: 75%;
`;

export const InfoParrafo = styled.p`
  font-size: 25px;
  margin: 5px 0;
  color: black;
  position:Relative;
  top:25px;
`;

export const Slider = styled.div`
  width: 70%;
  height: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: black;
`;

export const ContainerImages = styled.div`
  width:60%;
  height:60%;
  display:flex;
  align-items:Center;
  justify-content:flex-start;
  position:relative;
  transition:all 500ms ease-in-out;
  top:-40px;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${FadeInRight};
    `}
`;




