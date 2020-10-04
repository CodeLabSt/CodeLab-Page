import styled,{keyframes,css} from 'styled-components';
import {flash , slideInRight,slideInLeft} from 'react-animations';

const SlideInRight = keyframes`${slideInRight}`;
const SlideInLeft = keyframes`${slideInLeft}`;
const Flash = keyframes`${flash}`;

export const Section = styled.section`
  width: 100%;
  height: 500px;
  background: rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media(max-width:1030px){
    height:900px;
  }
  @media(max-width:520px){
    height:700px
  }
  @media(max-width:410px){
    height:600px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
  /* background: red; */
  margin: 0;
  & img{
    width:600px;
    height:500px;
    ${(props) => 
    props.flag &&
    css`
      animation:1s ${SlideInRight};
    `}
    @media(max-width:620px){
      width:500px;
      height:450px;
    }
    @media(max-width:520px){
      width:400px;
      height:350px;
      position:relative;
      top:-50px;
    }
    @media(max-width:400px){
      width:360px;
      height:310px;
      top:-15px;
    }
    @media(max-width:360px){
      width:310px;
      height:280px;
    }
    @media(max-width:320px){
      width:260px;
      height:220px;
    }
    @media(max-width:270px){
      width:210px;
      height:190px;
    }
  }
  @media(max-width:1200px){
    width:100%;
  }
  @media(max-width:1030px){
    flex-direction:column;
    justify-content:center;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 65px;
  margin: 0;
  line-height: 65px;
  @media(max-width:550px){
    font-size:55px;
    line-height: 55px;
  }
  @media(max-width:450px){
    font-size:45px;
    line-height: 50px;
  }
  @media(max-width:400px){
    font-size:35px;
    line-height: 40px;
  }
`;

export const Parrafo = styled.p`
  color: black;
  font-size: 22px;
  margin: 20px 0;
  @media(max-width:550px){
    font-size:18px;
  }
  @media(max-width:450px){
    font-size: 16px;
  }
  @media(max-width:400px){
    font-size: 14px;
    margin: 8px;
  }
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
  ${(props) => 
    props.flag &&
    css`
      animation:2s ${Flash};
    `}
  @media(max-width:550px){
    font-size:18px;
    width:140px;
    height:40px;
  }
  @media(max-width:450px){
    font-size:16px;
    width:120px;
    height:35px;
    letter-spacing:0;
  }
  /* @media(max-width:450px){
    font-size:14px;
    width:105px;
    height:30px;
    border-radius:5px;
  } */
`;

export const ContainerInfor = styled.div`
  display: block;
  width: 35%;
  height: 75%;
  position: relative;
  right: 120px;
  ${(props) => 
    props.flag &&
    css`
      animation:1s ${SlideInLeft};
    `}
    @media(max-width:1030px){
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      text-align:center;
      width:100%;
      height:35%;
      right:0;
      margin-top:15px;
    }

  
`;
