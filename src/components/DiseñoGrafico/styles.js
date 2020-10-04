import styled, { css , keyframes} from 'styled-components';
import {slideInLeft,slideInRight} from 'react-animations';

const SlideInLeft = keyframes`${slideInLeft}`;
const SlideInRight = keyframes`${slideInRight}`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 700px;
  background: rgba(0, 0, 0, 0.07);
  @media(max-width:920px){
    height:900px;
  }
  @media(max-width:490px){
    height:750px;
  }
  @media(max-width:400px){
    height:650px;
  }
`;

export const FlechaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
  position: Relative;
  top: -25px;
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  @media(max-width:490px){
    height: 55px;
    width: 55px;
    top:-20px;
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

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background: red; */
  flex-wrap: wrap;
  position: relative;
  top: -50px;
  @media(max-width:920px){
    justify-content:center;
    flex-direction: column;
    /* background:green; */
    height:85%;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 65px;
  margin: 0;
  line-height: 65px;
  @media(max-width:550px){
    font-size:55px;
    line-height: 55px;
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

export const TextParr = styled.p`
  color: black;
  font-size: 22px;
  margin: 20px 0;
  @media(max-width:550px){
    font-size:18px;
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
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #3fff7c, #3ffbe0);
  font-size: 20px;
  color: white;
  letter-spacing: 0.5px;
  /* margin-top: 15px; */
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

export const ImgTablet = styled.img`
  height: 400px;
  width: 570px;
    ${(props) => 
    props.flag &&
    css`
      animation:1s ${SlideInRight};
    `}
    @media(max-width:920px){
      height: 330px;
      width: 490px;
      position:relative;
      top:20px;
    }
    @media(max-width:550px){
      height: 290px;
      width: 430px;
    }
    @media(max-width:490px){
      height: 260px;
      width: 390px;
      top:30px
    }
    @media(max-width:400px){
      height: 205px;
      width: 310px;
      /* top:-30px */
    }
    @media(max-width:320px){
      height: 160px;
      width: 230px;
    }
    @media(max-width:270px){
      width:180px;
      height:125px;
    }
`;

export const InfoContainer = styled.div`
  width: 25%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-self: auto;
  justify-content: left;
  /* background: blue; */
  position: relative;
  top: 15px;
  left: 60px;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${SlideInLeft};
    `}
  @media(max-width:920px){
    align-items:center;
    justify-content:center;
    width:100%;
    height:40%;
    text-align:center;
    left:0;
    top:-20px;
  }
`;
