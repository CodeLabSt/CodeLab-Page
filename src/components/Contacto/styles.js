import styled,{keyframes,css} from 'styled-components';
import {zoomInRight,fadeInRightBig,fadeInLeft} from 'react-animations';

const ZommIn = keyframes`${zoomInRight}`;
const LightSpeedIn = keyframes`${fadeInRightBig}`;
const FadeInLeft = keyframes`${fadeInLeft}`;

export const Section = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.07);
`;

export const Title = styled.h1`
  font-size: 70px;
  margin: 10px 0%;
  color: black;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
`;

export const Parr = styled.p`
  font-size: 25px;
  margin: 5px 0;
  color: black;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${FadeInLeft};
    `}
`;

export const Formulario = styled.form`
  width: 65%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  margin: 0;
  /* background: red; */
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  /* border: 2px solid black; */
  border-radius: 10px;
  font-size: 18px;
  /* margin-bottom: 20px; */
  padding: 0px 20px;
  border: none;
  outline: none;
  width: 45%;
  height: 50px;
  color: black;
  ${(props) => 
    props.flag &&
    css`
      animation: 1s ${LightSpeedIn};
    `}
`;

export const TextBox = styled.textarea`
  background-color: rgba(0, 0, 0, 0.1);
  /* border: 2px solid black; */
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  /* font-weight:bold; */
  /* margin-bottom: 20px; */
  padding: 10px 20px;
  outline: none;
  width: 100%;
  height: 30%;
  color: black;
  ${(props) => 
    props.flag &&
    css`
      animation: 1s ${LightSpeedIn};
    `}
  & ::placeholder {
    color: black;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to right, #3fff7c, #3ffbe0);
  font-size: 22px;
  /* letter-spacing: 0.5px; */
  cursor: pointer;
  position: relative;
  /* left: 830px; */
  top: -15px;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${ZommIn};
    `}
`;
