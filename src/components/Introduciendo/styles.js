import styled from 'styled-components';
import img from '../../images/DegradadoInicio.jpg';

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
  right: 110px;
  /* margin-right: 150px; */
`;
export const Menu = styled.nav`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  height: 100%;
  color: white;
  flex-wrap: wrap;
  position: relative;
  left: 75px;
  & > a {
    font-size: 23px;
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
  /* font-weight: bolder; */
  line-height: 80px;
  /* margin-left: 90px; */
  position: relative;
  left: 40px;
`;

export const Parrafo = styled.p`
  margin: 0;
  color: white;
  position: relative;
  left: 40px;
  font-size: 30px;
  margin: 12px 0;
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
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
  top: 160px;
`;
