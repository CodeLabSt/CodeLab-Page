import styled, { css , keyframes} from 'styled-components';
import {fadeIn,zoomInDown,slideInUp} from 'react-animations';

const ZommIn = keyframes`${zoomInDown}`;
const Bounce = keyframes`${fadeIn}`;
const Hinge = keyframes`${slideInUp}`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin: 0;
`;

export const SectionC = styled.section`
  width: 100%;
  height: 850px;
  ${(props) =>
    props.bandera
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          /* background: orange; */
          text-align: center;
          flex-direction: column;
        `
      : css`
          display: none;
        `}
`;

export const Title = styled.h1`
  color: black;
  font-size: 70px;
  margin: 25px 0;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  position: relative;
  top: -30px;
  ${(props) =>
    props.bandera
    && css`
        animation:1s ${Hinge};
      `}
`;

export const ContainerRows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 40%;
  flex-wrap: wrap;
  position: relative;
  top: -2px;
  ${(props) =>
    props.bandera
    && css`
          animation:1s ${ZommIn};
      `}
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
`;

export const InfoContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: green; */
  margin: 0;
`;

export const InfoParrafo = styled.p`
  font-size: 18px;
  margin: 0;
  color: black;
`;

export const InfoTitle = styled.h3`
  font-size: 25px;
  color: black;
  margin: 10px 0;
`;
