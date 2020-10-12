import styled,{css,keyframes} from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  @media(max-width:1030px){
    height: 120vh;
  }
  @media(max-width:800px){
    height: 100vh;
  }
  @media(max-width:700px){
    height: 85vh;
  }
  @media(max-width:550px){
    height:75vh;
  }
  @media(max-width:420px){
    height:65vh;
  }
  @media(max-width:380px){
    height:50vh;
  }
`;

export const FlechaContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 15;
  cursor: pointer;
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  left: 10%;
  top: 55%;
  @media(max-width:1150px){
    height:50px;
    width:50px;
    top: 50%;
    left:5%;
  }
  @media(max-width:920px){
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    top:55%;
  }
  @media(max-width:800px){
    left:10%;
  }
  @media(max-width:500px){
    height:40px;
    width:40px;
  }
  @media(max-width:400px){
    top:60%;
    height:30px;
    width:30px;
  }
  @media(max-width:300px){
    top:58%;
  }
`;

export const FlechaContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  /* position: Relative;
  top: -25px; */
  z-index: 15;
  cursor: pointer;
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  left: 85%;
  top: 55%;
  @media(max-width:1150px){
    height:50px;
    width:50px;
    top: 50%;
    left:90%;
  }
  @media(max-width:920px){
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    top:55%;
  }
  @media(max-width:800px){
    left:85%;
  }
  @media(max-width:550px){
    left:80%;
  }
  @media(max-width:500px){
    height:40px;
    width:40px;
  }
  @media(max-width:400px){
    top:60%;
    height:30px;
    width:30px;
  }
  @media(max-width:300px){
    top:58%;
  }
`;

export const ImgFlechaLeft = styled.img`
  width:45px;
  height:45px;
  transform: rotateY(180deg);
  @media(max-width:1150px){
    height:30px;
    width:30px;
  }
  @media(max-width:500px){
    height:20px;
    width:20px;
  }
  @media(max-width:400px){
    height:15px;
    width:15px;
  }
`;

export const ImgFlechaRight = styled.img`
  width:45px;
  height:45px;
  position: absolute;
  z-index: 15;
  @media(max-width:1150px){
    height:30px;
    width:30px;
  }
  @media(max-width:500px){
    height:20px;
    width:20px;
  }
  @media(max-width:400px){
    height:15px;
    width:15px;
  }
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
  height: 10%;
  position:relative;
  top:-15px;
`;

export const Title = styled.h1`
  color: black;
  font-size: 70px;
  margin:5px 0;
  background: linear-gradient(to right, #3fff7c, #3ffbe0) bottom no-repeat;
  background-size: 75% 8px;
  @media(max-width:980px){
    font-size:60px;
    background-size: 75% 6px;
  }
  @media(max-width:920px){
    position:relative;
    top:20px;
    font-size:55px;
  }
  @media(max-width:800px){
    font-size:45px;
    background-size: 75% 4px;
  }
  @media(max-width:570px){
    font-size:40px;
  }
  @media(max-width:460px){
    font-size:38px;
  }
  @media(max-width:410px){
    font-size:35px;
    background-size: 75% 2px;
    margin-bottom:5px;
  }

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
  height: 75%;
`;

export const Slider = styled.div`
  width: 70%;
  height: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: black;
`;

export const ContainerImages = styled.div`
  width:60%;
  height:65%;
  display:flex;
  align-items:Center;
  justify-content:flex-start;
  position:relative;
  transition:all 500ms ease-in-out;
  top:-40px;
  overflow: hidden;
  @media(max-width:1150px){
    width:70%;
    height:70%;
  }
  @media(max-width:1030px){
    height:65%;
  }
  @media(max-width:920px){
    width:100%;
    height:80%;
    top:0;
  }
  @media(max-width:700px){
    height:83%;
  }
  @media(max-width:600px){
    height:76%;
  }
  @media(max-width:500px){
    height:65%;
  }
  @media(max-width:450px){
    height:60%;
    top:-25px;
  }
  @media(max-width:420px){
    height: 60%;
    top: -10px;
  }
  @media(max-width:360px){
    height: 72%;
    top: 5px;
  }
  @media(max-width:300px){
    height: 55%;
    top: -13px;
  }
`;