import styled, { css } from 'styled-components';

// Verde:#3fff7c , Azul:#3ffbe0 , gris:#cfbebb

export const Section = styled.section`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.07);
`;

export const FirtsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* background: yellow; */
  text-align: center;
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
`;

export const ImgLaptop = styled.img`
  width: 45%;
  height: 90%;
  margin: 0;
  position: relative;
  top: -60px;
`;

export const Title = styled.h1`
  color: black;
  margin: 0;
  font-size: 65px;
  /* text-decoration-line: underline; */
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  /* text-decoration-color: linear-gradient(to right, #3fff7c, #3ffbe0); */
`;

export const Parraf = styled.p`
  font-size: 25px;
  margin: 30px 0;
  color: black;
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
`;

export const Subtitle = styled.h2`
  color: black;
  font-size: 70px;
  margin: 0;
  line-height: 65px;
`;

export const SubParrafo = styled.p`
  margin: 10px 0;
  font-size: 30px;
  line-height: 30px;
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
  position: Relative;
  top: -65px;
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
