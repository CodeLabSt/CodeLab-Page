import styled from 'styled-components';

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
`;

export const Title = styled.h1`
  color: black;
  font-size: 80px;
  margin: 0;
  line-height: 85px;
`;

export const Parrafo = styled.p`
  color: black;
  font-size: 25px;
  margin: 15px 0;
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

export const ContainerInfor = styled.div`
  display: block;
  width: 35%;
  height: 75%;
  position: relative;
  right: 120px;
`;
