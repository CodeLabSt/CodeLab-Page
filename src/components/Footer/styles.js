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
  @media(max-width:1000px){
    flex-direction:column;
    justify-content:space-around;
    height:780px;
    position:relative;
  }
  @media(max-width:500px){
    & div:nth-child(1){
      top:30px;
    }
    & div:nth-child(3){
      top:-30px;
    }
  }
`;

export const Container = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  flex-wrap: wrap;
  /* background: blue; */
  @media(max-width:1200px){
    width:28%;
  }
  @media(max-width:1000px){
    height:30%;
    width:60%;
    align-items:center;
    justify-content:center;
    position:relative;
    text-align:center;
  }
  @media(max-width:500px){
    width:80%;
  }
  @media(max-width:375px){
    width:90%;
  }

`;

export const MediumContainer = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  flex-wrap: wrap;
  @media(max-width:1200px){
    width:28%;
  }
  @media(max-width:1000px){
    height:20%;
    width:60%;
    align-items:center;
    justify-content:center;
    position:relative;
    text-align:center;
  }
  @media(max-width:500px){
    width:80%;
  }
  @media(max-width:375px){
    width:90%;
  }

`;

export const Title = styled.h2`
  font-size: 30px;
  color: black;
  /* background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 100% 3px; */
  margin: 15px 0;
  @media(max-width:284px){
    font-size:24px;
  }
`;

export const Parrafo = styled.p`
  font-size: 18px;
  margin: 5px 0;
  @media(max-width:330px){
    font-size:16px;
  }
  @media(max-width:300px){
    font-size:14px;
  }
  @media(max-width:263px){
    font-size:12px;
  }
  /* color: black; */
`;

export const Anchor = styled.a`
  color: black;
  margin: 5px 0;
  font-size: 18px;
  text-decoration:none;
  cursor: pointer;
  @media(max-width:330px){
    font-size:16px;
  }
  @media(max-width:284px){
    font-size:14px;
  }
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
    margin-right:10px;
    @media(max-width:330px){
    width: 25px;
    height: 25px;
    margin-right:2px;
    }
    @media(max-width:300px){
      display:none;
    }
  }
  & a{
    text-decoration:none;
    color:black;
    &:hover{
    color: #3fff7c;
    }
  }
  @media(max-width:1000px){
    justify-content:center;
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:left;
  width: 100%;
  height: 20%;
  margin: 10px 0;
  & > a{
    text-decoration:none;
    margin-right: 10px;
    width: 35px;
    height: 35px;
    color:black;
    cursor: pointer;
    & > svg {
      width:100%;
      height:100%;
      &:hover {
        color: #3fff7c;
      }
    }
  }
  @media(max-width:1000px){
    width:80%;
    justify-content:space-around;
  }
`;
