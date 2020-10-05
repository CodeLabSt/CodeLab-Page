import styled,{css} from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.07);
  @media(max-width:600px){
    height:570px;
  }
  @media(max-width:450px){
    height:520px;
  }
`;

export const Title = styled.h1`
  font-size: 70px;
  margin: 10px 0%;
  color: black;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  @media(max-width:680px){
    font-size:50px;
    background-size: 75% 6px;
  }
  @media(max-width:580px){
    font-size:45px;
  }
  @media(max-width:450px){
    font-size:40px;
    background-size: 75% 4px;
  }
  @media(max-width:410px){
    font-size:35px;
    background-size: 75% 2px;
  }
`;

export const Parr = styled.p`
  font-size: 25px;
  margin: 5px 15px;
  color: black;
  @media(max-width:680px){
    font-size:18px;
    margin:5px 20px;
  }
  @media(max-width:450px){
    font-size:16px;
    margin:10px 15px;
  }
  @media(max-width:410px){
    margin:5px 10px;
    /* font-size:14px; */
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const Formulario = styled.form`
  width: 65%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  margin: 0;
  /* background: red; */
  @media(max-width:1000px){
    width:85%;
  }
  @media(max-width:750px){
    width:90%;
  }
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  font-family: 'Montserrat', sans-serif;
  /* border: 2px solid black; */
  border-radius: 10px;
  font-size: 18px;
  /* margin-bottom: 20px; */
  padding: 0px 20px;
  border: none;
  outline: none;
  width: 45%;
  height: 50px;
  color: black;
  font-weight:bold;
  &::placeholder{
    font-weight:bold;
  }
  @media(max-width:550px){
    width:65%;
    height:40px;
  }
  @media(max-width:450px){ 
    font-size: 16px;
  }
`;

export const TextBox = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 18px;
  border: none;
  padding: 10px 20px;
  outline: none;
  width: 100%;
  height: 30%;
  color:black;
  font-weight:none !important;
  &::placeholder {
    color: gray;
    font-size:18px;
  }
  @media(max-width:750px){
    width:90%;
  }
  @media(max-width:450px){
    width:93%;
    font-size: 17px;
    margin:5px 0;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  color: white;
  border: none;
  outline:none;
  border-radius: 10px;
  background: linear-gradient(to right, #3fff7c, #3ffbe0);
  font-size: 22px;
  /* letter-spacing: 0.5px; */
  cursor: pointer;
  position: relative;
  /* left: 830px; */
  top: -15px;
  &[disabled] {
    opacity: 0.3;
  }
  @media(max-width:550px){
    font-size:18px;
    width:140px;
    height:40px;
  }
  @media(max-width:450px){
    font-size:16px;
    width:105px;
    height:35px;
    letter-spacing:0;
  }
`;
