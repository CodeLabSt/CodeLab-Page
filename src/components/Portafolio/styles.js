import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  min-heigth: 100vh;
  heigth: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FlechaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.13);
  /* position: Relative;
  top: -25px; */
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
`;

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  flex-wrap: wrap;
  margin: 0;
  /* background: blue; */
  width: 100%;
  height: 20%;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: black;
  flex-wrap: wrap;
  margin: 0;
  /* background: green; */
  width: 100%;
  height: 80%;
`;

export const Title = styled.h1`
  color: black;
  font-size: 70px;
  margin: 5px 0;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
`;

export const InfoParrafo = styled.p`
  font-size: 22px;
  margin: 10px 0;
  color: black;
`;

export const Slider = styled.div`
  width: 70%;
  heigth: 100%;
  min-height: 20vh;
  display: flex;
  justifi-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: black;
`;