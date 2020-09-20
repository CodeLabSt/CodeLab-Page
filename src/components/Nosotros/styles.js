import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 750px;
  /* background: blue; */
`;

export const FirtsContainer = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  /* background: green; */
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 70%;
  /* background: red; */
`;

export const Presentacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 28%;
  height: 75%;
  margin: 0 15px;
  /* border-radius: 10px; */
  /* background: pink; */
  ${(props) =>
    props.Image &&
    css`
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${props.Image});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `}
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  /* background: yellow; */
  flex-wrap: wrap;
  position: relative;
  top: 40px;
  & > svg {
    color: white;
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
      color: #3fff7c;
    }
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 45px;
  margin: 0;
  line-height: 45px;
  border-bottom: green;
`;

export const Description = styled.p`
  color: white;
  font-size: 25px;
  margin: 10px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
  top: 40px;
`;

export const FirtsTitle = styled.h1`
  color: black;
  font-size: 75px;
  margin: 0;
  /* text-decoration-line: underline; */
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  /* text-decoration-line: underline overline; */
  /* text-decoration-line: overline underline line-through; */
  /* text-decoration-line: overline; */
  /* text-decoration-line: line-through; */
  /* text-decoration-style: double; */
  /* text-decoration-color: lightblue; */
`;

export const ParafNosot = styled.p`
  color: gray;
  font-size: 30px;
  margin: 10px 0;
`;
