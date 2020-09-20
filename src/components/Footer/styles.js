import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 280px;
  align-items: center;
  justify-content: space-around;
  background: white;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  flex-wrap: wrap;
  /* background: blue; */
`;

export const Title = styled.h2`
  font-size: 35px;
  color: black;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 100% 3px;
  margin: 15px 0;
`;

export const Parrafo = styled.p`
  font-size: 18px;
  margin: 5px 0;
  /* color: black; */
`;

export const Anchor = styled.a`
  color: black;
  margin: 5px 0;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #3fff7c;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: left;
  width: 100%;
  height: 20%;
  margin: 0;
  & > svg {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    color: #3fff7c;
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  width: 100%;
  height: 20%;
  margin: 10px 0;
  & > svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    color: #3fff7c;
    cursor: pointer;
    &:hover {
      color: #3ffbe0;
    }
  }
`;
