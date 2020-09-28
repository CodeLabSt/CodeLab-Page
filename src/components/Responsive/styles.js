import styled,{keyframes,css} from 'styled-components';
import {flash , zoomInUp,zoomInRight} from 'react-animations';

const ZommInUp = keyframes`${zoomInUp}`;
const ZoomInRight = keyframes`${zoomInRight}`;
const Flash = keyframes`${flash}`;

export const Section = styled.section`
  width: 100%;
  height: 500px;
  background: rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  /* background: red; */
  margin: 0;
  & img{
    ${(props) => 
    props.flag &&
    css`
      animation:1s ${ZommInUp};
    `}
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 65px;
  margin: 0;
  line-height: 65px;
`;

export const Parrafo = styled.p`
  color: black;
  font-size: 22px;
  margin: 20px 0;
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
  ${(props) => 
    props.flag &&
    css`
      animation:2s ${Flash};
    `}
`;

export const ContainerInfor = styled.div`
  display: block;
  width: 35%;
  height: 75%;
  position: relative;
  right: 120px;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${ZoomInRight};
    `}
`;
