import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 500px;

  ${(props) =>
    props.bandera
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-align: center;
          /* background: blue; */
          flex-direction: column;
        `
      : css`
          display: none;
        `}
`;

export const Container = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  margin: 0;
`;

export const Title = styled.h1`
  color: black;
  font-size: 70px;
  margin: 0;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  /* position: relative;
  top: -30px; */
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  height: 100%;
  flex-wrap: wrap;
  margin: 15px 0;
`;

export const Subtitle = styled.h3`
  font-size: 30px;
  margin: 2px 0;
  color: black;
`;

export const InfoParrafo = styled.p`
  font-size: 18px;
  margin: 0;
  color: black;
`;
