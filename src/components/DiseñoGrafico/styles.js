import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 700px;
  background: rgba(0, 0, 0, 0.07);
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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
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
`;

export const Title = styled.h1`
  color: black;
  font-size: 90px;
  margin: 0;
  line-height: 80px;
`;

export const TextParr = styled.p`
  color: black;
  font-size: 28px;
  margin: 20px 0;
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
`;

export const ImgTablet = styled.img`
  height: 80%;
  width: 45%;
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
`;
