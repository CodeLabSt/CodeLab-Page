import styled, { keyframes , css } from 'styled-components';
import img from '../../images/DegradadoInicio.jpg';
import {slideInLeft,zoomInDown,flash,fadeInUpBig,slideInRight} from 'react-animations';

const SlideInLeft = keyframes`${slideInLeft}`;
const ZoomInDown = keyframes`${zoomInDown}`;
const Flash = keyframes`${flash}`;
const FadeInUpBig = keyframes`${fadeInUpBig}`;
const SlideInRight = keyframes`${slideInRight}`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 700px;
  /* background: green; */
  @media(max-width:890px){
    height:570px;
  }
  @media(max-width:750px){
    height:520px;
  }
  @media(max-width:580px){
    height:450px;
  }
  @media(max-width:510px){
    height:330px;
  }
  @media(max-width:450px){
    height:270px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  flex: wrap;
  /* background: red; */
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  color: white;
  align-items: center;
  justify-content: space-around;
  background: transparent;
  @media(max-width:950px){
    /* background:green; */
    height:200px;
    flex-direction:column;
    justify-content:center;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 0;
  position: relative;
  right: 80px;
  animation: 1s ${SlideInLeft};

  @media(max-width:1100px){
    right: 50px;
  }
  @media(max-width:950px){
    right: 0px;
    top:-40px;
    width: 200px;
    height: 200px;
  }
  @media(max-width:580px){
    display:none;
  }

`;
export const Menu = styled.nav`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  color: white;
  flex-wrap: wrap;
  animation:1s ${SlideInRight};

  & > a {
    font-size: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
    @media(max-width:1100px){
      font-size: 18px;
    }
  }
  @media(max-width:1100px){
      width: 55%;
  }
  @media(max-width:950px){
      width: 80%;
      position:relative;
      top:-80px;
  }
  @media(max-width:580px){
    display:none;
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 90px;
  font-weight: bold;
  line-height: 80px;
  /* margin-left: 90px; */
  position: relative;
  left: 40px;
  animation: 1s ${SlideInLeft};

  @media(max-width:1100px){
    font-size:75px;
    top:70px;
    line-height: 70px;
    top:0;
  }
  @media(max-width:920px){
    font-size:60px;
    line-height: 55px;
  }
  @media(max-width:750px){
    font-size:50px;
    line-height: 45px;
  }
  @media(max-width:630px){
    font-size:45px;
    line-height: 40px;
  }
  @media(max-width:560px){
    font-size:35px;
    line-height: 30px;
  }
  @media(max-width:450px){
    font-size:28px;
    line-height: 25px;
  }
  @media(max-width:340px){
    font-size:26px;
    line-height: 22px;
  }
  @media(max-width:290px){
    font-size:22px;
    line-height: 18px;
  }
`;

export const Parrafo = styled.p`
  margin: 0;
  color: white;
  position: relative;
  left: 40px;
  font-size: 25px;
  margin: 12px 0;
  animation: 2s ${SlideInRight};
  @media(max-width:1100px){
      font-size: 20px;
      margin: 20px 0;
    }
  @media(max-width:890px){
    font-size:18px;
  }
  @media(max-width:510px){
    font-size:16px;
    margin:10px 0;
  }
  @media(max-width:450px){
    font-size:14px;
    margin:5px 0;
  }
  @media(max-width:340px){
    font-size:12px;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 140px;
  color: white;
  border: none;
  /* border-radius: 25px; */
  /* background: transparent; */
  background: linear-gradient(to right, #3fff7c, #3ffbe0);
  position: relative;
  left: 40px;
  font-size: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;
  margin: 15px 0;
  outline: none;
  animation: 2s ${Flash};
    @media(max-width:1100px){
      font-size: 18px;
      width:130px;
      height:40px;
      margin:0;
    }
    @media(max-width:750px){
    font-size: 17px;
    letter-spacing:1px;
  }
  @media(max-width:510px){
    font-size:14px;
    width:110px;
    height:35px;
  }
  @media(max-width:450px){
    width:95px;
    height:28px;
    letter-spacing:0px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
  top: 160px;
  animation: 1s ${ZoomInDown};
    @media(max-width:1100px){
      top:230px;
    }
  @media(max-width:950px){
      top:90px;
  }
  @media(max-width:890px){
    top:30px;
  }
  @media(max-width:580px){
    top:-50px;
    right:20px;
  }
  @media(max-width:510px){
    right:20px;
  }
  @media(max-width:450px){
    right:35px;
    margin:3px;
    top:-15px;
  }
`;
