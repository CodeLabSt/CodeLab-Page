import styled, { css,keyframes } from 'styled-components';
import {slideInLeft,slideInRight} from 'react-animations';

const SlideInLeft = keyframes`${slideInLeft}`;
const SlideInRight = keyframes`${slideInRight}`;

export const Section = styled.section`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.07);
  @media(max-width:920px){
    height:1300px;
  }
  @media(max-width:680px){
    height:1000px;
  }
  @media(max-width:490px){
    height:900px;
  }
  @media(max-width:400px){
    height:730px;
  }
`;

export const FirtsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${SlideInLeft};
    `}
  @media(max-width:920px){
    height:20%;
    position:relative;
    top:-80px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  /* background: palegreen; */
  @media(max-width:920px){
    justify-content:center;
  }
`;

export const ImgLaptop = styled.img`
  width: 530px;
  height: 440px;
  margin: 0;
  position: relative;
  top: -60px;
  @media(max-width:920px){
    top:-100px;
    height:420px;
  }
  @media(max-width:680px){
    /* top: -170px; */
    height: 360px;
    width: 470px;
  }
  @media(max-width:490px){
    height: 300px;
    width: 380px;
    top:-50px;
  }
  @media(max-width:400px){
    height: 245px;
    width: 310px;
    top:-25px;
  }
  @media(max-width:320px){
    height: 200px;
    width: 250px;
  }
  @media(max-width:270px){
    height:145px;
    width:190px;
    }
`;

export const Title = styled.h1`
  color: black;
  margin: 0;
  font-size: 70px;
  position:relative;
  top:30px;
  /* text-decoration-line: underline; */
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  /* text-decoration-color: linear-gradient(to right, #3fff7c, #3ffbe0); */
  @media(max-width:680px){
    font-size:50px;
    /* top:-20px; */
    background-size: 75% 6px;
  }
  @media(max-width:580px){
    font-size:45px;
    /* top:-25px; */
  }
  @media(max-width:450px){
    font-size:40px;
    background-size: 75% 4px;
    /* top:-50px; */
  }
  @media(max-width:410px){
    font-size:35px;
    background-size: 75% 2px;
    top:60px;
  }
`;

export const Parraf = styled.p`
  font-size: 25px;
  margin: 30px 0;
  color: black;
  position:relative;
  top:20px;
  @media(max-width:680px){
    font-size:18px;
    top:30px;
    margin:25px 20px;
  }
  @media(max-width:580px){
    /* top:-35; */
  }
  @media(max-width:450px){
    font-size:16px;
    margin:10px 15px;
    /* top:-45px; */
  }
  @media(max-width:410px){
    /* font-size:14px; */
    top:65px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 60%;
  /* background: red; */
  width: 40%;
  position: relative;
  top: -60px;
  ${(props) => 
    props.flag &&
    css`
      animation: 1s ${SlideInRight};
    `}
  @media(max-width:920px){
    width:100%;
    align-items:center;
    justify-content:center;
    top:-140px;
    margin:0 10px;
  }
  @media(max-width:550px){
    /* top:-250px; */
    text-align:center;
  }
  @media(max-width:490px){
    top:-70px
  }
  @media(max-width:400px){
    top:-50px;
  }
`;

export const Subtitle = styled.h2`
  color: black;
  font-size: 65px;
  margin:0;
  line-height: 65px;
  @media(max-width:550px){
    font-size:55px;
    line-height: 60px;
  }
  @media(max-width:450px){
    font-size:45px;
    line-height: 50px;
  }
  @media(max-width:400px){
    font-size:35px;
    line-height: 40px;
  }
`;

export const SubParrafo = styled.p`
  margin: 10px 0;
  font-size: 22px;
  /* line-height: 30px; */
  @media(max-width:920px){
    margin:20px 0;
  }
  @media(max-width:550px){
    font-size: 18px;
    margin:15px 0px;
  }
  @media(max-width:450px){
    font-size: 16px;
  }
  @media(max-width:400px){
    font-size: 14px;
    margin: 8px;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  color: white;
  /* margin-top: 15px; */
  border: none;
  /* border-radius: 25px; */
  /* background: transparent; */
  background: linear-gradient(to right, #3fff7c, #3ffbe0);
  font-size: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;
  outline:none;
  @media(max-width:550px){
    font-size:18px;
    width:140px;
    height:40px;
  }
  @media(max-width:450px){
    font-size:16px;
    width:120px;
    height:35px;
    letter-spacing:0;
  }
  /* @media(max-width:450px){
    font-size:14px;
    width:105px;
    height:30px;
    border-radius:5px;
  } */
`;

export const FlechaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  /* background: linear-gradient(to right, #3fff7c, #3ffbe0); */
  background: rgba(0, 0, 0, 0.15);
  position: relative;
  top: -65px;
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  @media(max-width:920px){
    top:0px;
  }
  @media(max-width:490px){
    height: 55px;
    width: 55px;
    top:20px;
  }
`;

export const ImgFlecha = styled.img`
  width: 50px;
  height: 50px;
  ${(props) =>
    props.flag
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(270deg);
        `}
  @media(max-width:490px){
   width:35px;
   height:35px; 
  }
`;
