import styled, { css , keyframes} from 'styled-components';
import {flash , zoomInDown,swing,wobble,tada,slideInLeft} from 'react-animations';

const Animation = keyframes`${flash}`;
const ZommIn = keyframes`${zoomInDown}`;
const Swing = keyframes`${swing}`;
const Wobble = keyframes`${wobble}`;
const Tada = keyframes`${tada}`;
const SlideInLeft = keyframes`${slideInLeft}`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 750px;
`;

export const FirtsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
  width: 100%;
  height: 30%;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 70%;
`;

export const Presentacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 28%;
  height: 75%;
  margin: 0 15px;
  /* border-radius: 10px; */
  ${(props) =>
    props.Image &&
    css`
      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),
        url(${props.Image});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `}
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  flex-wrap: wrap;
  position: relative;
  top: 40px;
  & > a {
    text-decoration:none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: white;
    & > svg {
    color: white;
    width: 50px;
    height: 50px;
      &:hover {
      color: #3fff7c;
    }
    }
  }
  ${(props) => 
    props.flag &&
    css`
      animation: 2s ${Animation};
      & > svg{
      animation: 1s ${Tada};
      }
    `}
`;

export const Title = styled.h2`
  color: white;
  font-size: 45px;
  margin-top: 0;
  border-bottom: green;
`;

export const Description = styled.p`
  color: white;
  font-size: 25px;
  margin: 10px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
  top: 40px;
  ${(props) => 
    props.flag &&
    css`
      animation: 2s ${Animation};
    `}
`;

export const FirtsTitle = styled.h1`
  color: black;
  font-size: 70px;
  margin: 0;
  position: relative;
  top:20px;
  /* text-decoration-line: underline; */
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  /* text-decoration-line: underline overline; */
  /* text-decoration-line: overline underline line-through; */
  /* text-decoration-line: overline; */
  /* text-decoration-line: line-through; */
  /* text-decoration-style: double; */
  /* text-decoration-color: lightblue; */
  ${(props) => 
    props.flag &&
    css`
      animation: 1s ${SlideInLeft};
    `}
`;

export const ParafNosot = styled.p`
  color: black;
  font-size: 25px;
  margin: 10px 0;
  position: relative;
  top:30px;
`;
