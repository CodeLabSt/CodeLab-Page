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
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 0;
  position: relative;
  right: 80px;
  ${(props) => 
    props.flag &&
    css`
      animation: 1s ${SlideInLeft};
    `}
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
  /* position: relative;
  left: 75px; */
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${SlideInRight};
    `}
  & > a {
    font-size: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

export const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 90px;
  font-weight: bold;
  line-height: 80px;
  /* margin-left: 90px; */
  position: relative;
  left: 40px;
  ${(props) => 
    props.flag &&
    css`
      animation: 1s ${FadeInUpBig};
    `}
`;

export const Parrafo = styled.p`
  margin: 0;
  color: white;
  position: relative;
  left: 40px;
  font-size: 25px;
  margin: 12px 0;
  ${(props) => 
    props.flag &&
    css`
      animation: 2s ${FadeInUpBig};
    `}
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
  ${(props) => 
    props.flag &&
    css`
      animation: 2s ${Flash};
    `}
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
  top: 160px;
  animation: 1s ${ZoomInDown};
  ${(props) => 
    props.flag &&
    css`
      animation: 2s ${ZoomInDown};
    `}
`;
