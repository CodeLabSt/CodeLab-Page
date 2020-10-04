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
  @media(max-width:1170px){
    height:1100px;
  }
  @media(max-width:780px){
    height:1500px;
  }
  @media(max-width:450px){
    height:1300px;
  }
  @media(max-width:280px){
    height:1150px;
  }
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
  @media(max-width:1170px){
    height:20%;
  }
  @media(max-width:780px){
    height:15%;
  }
  @media(max-width:450px){
    position:relative;
    top:-60px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* flex-wrap:wrap; */
  width: 90%;
  height: 70%;
  /* background:red; */
  @media(max-width:1170px){
    height:80%;
  }
  @media(max-width:780px){
    height:85%;
  }
  @media(max-width:450px){
    height:75%;
    position:relative;
    top:-70px;
  }
`;

export const Presentacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 320px;
  height: 380px;
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
  @media(max-width:1170px){
    margin:20px 15px;
  }
  @media(max-width:780px){
    width: 340px;
    height: 370px;
    border-radius:5px;
  }
  @media(max-width:680px){
    margin:20px 8px;
    position:relative;
    top:-40px;
  }
  @media(max-width:580px){
    width: 315px;
    height: 320px;
    top:0px;
  }
  @media(max-width:450px){
    width: 290px;
    height: 310px;
  }
  @media(max-width:400px){
    width: 280px;
  }
  @media(max-width:280px){
    height:270px;
    top:35px;
  }
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
  top: 15px;
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
      @media(max-width:450px){
        width: 40px;
        height: 40px;
      }
      @media(max-width:400px){
        width: 35px;
        height: 35px;
      }
    }
  }
  @media(max-width:450px){
      top:20px;
  }
  @media(max-width:400px){
    top:40px;
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
  position:relative;
  top: -55px;
  @media(max-width:450px){
    top:-20;
    font-size: 38px;
    line-height:34px;
  }
  @media(max-width:400px){
    font-size: 32px;
    line-height:30px;
  }
  @media(max-width:280px){
    font-size: 28px;
    line-height:26px;
  }
`;

export const Description = styled.p`
  color: white;
  font-size: 25px;
  margin: 10px 0;
  position:relative;
  top: -50px;
  @media(max-width:450px){
    top:-15;
    font-size: 20px;
  }
  @media(max-width:400px){
    top:-35px;
    font-size: 18px;
  }
  @media(max-width:280px){
    font-size: 16px;
  }
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
  @media(max-width:850px){
    font-size:60px;
  }
  @media(max-width:680px){
    font-size:50px;
    top:-20px;
    background-size: 75% 6px;
  }
  @media(max-width:580px){
    font-size:45px;
    top:0px;
  }
  @media(max-width:450px){
    font-size:40px;
    background-size: 75% 4px;
  }
  @media(max-width:410px){
    font-size:35px;
    background-size: 75% 2px;
  }
`;

export const ParafNosot = styled.p`
  color: black;
  font-size: 25px;
  margin: 10px 0;
  position: relative;
  top:30px;
  @media(max-width:850px){
      font-size:20px;
    }
  @media(max-width:680px){
    font-size:18px;
    top:-15px;
  }
  @media(max-width:580px){
    margin:10px 12px;
    top:0px;
  }
  @media(max-width:450px){
    font-size:16px;
    margin:10px 15px;
  }
  @media(max-width:280px){
    font-size: 14px;
    margin:10px 5px;
  }
`;

