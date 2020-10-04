import styled,{css} from 'styled-components';

export const Menu = styled.nav`
    display:none;
    @media(max-width:580px){
        position: fixed;
        width: 96.5%;
        height: 74px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        background: transparent;
        z-index: 5000;
        /* background:green; */
        top:0px;
        ${(props) =>
            props.scroll ?
                css`
                    /* top:20px; */
                    background:rgba(114, 247, 155, .95);
                `
            :
                css`
                    margin-top:0px;
                `
        }
    }
    @media(max-width:500px){
        width:95.5%;
    }
    @media(max-width:450px){
        width:100%;
        height:55px;
    }
`;

export const Modal = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    transition: all 500ms ease-in;
    position: absolute;
    z-index: 1000;
    top: 55px;
    left: 0;
    background:rgba(114, 247, 155, .96);
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    ${(props) =>
        props.isActive ?
            css`
                transform: translateY(0);
            `
            :
            css`
                transform: translateY(-200vh);
            `
    }
    & > a{
        display:flex;
        align-items:center;
        justify-content:center;
        margin:22px 10px;
        width:250px;
        height:50px;
        color:white;
        text-decoration:none;
        font-size:20px;
        border:1px solid white;
        border-radius:5px;
        &:hover{
            color:black;
            border:1px solid black;
        }
        @media(max-width:450px){
            width:140px;
            height:30px;
            font-size:18px;
            /* margin:14.5px 10px; */
        }
    }
`;

export const LogoModal = styled.img`
    width:180px;
    height:180px;
    position:relative;
    margin-left:13px;
    @media(max-width:450px){
        margin-left:0px;
        right:5px;
        height:140px;
        width:140px;
    }
    @media(max-width:290px){
        height:110px;
        width:110px;
    }
`;

export const ContainerImg = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:90%;
    width:10%;
    /* background:blue; */
    margin-right:45px;
    @media(max-width:450px){
        margin-right:15px;
    }
`;

export const Img = styled.img`
    margin: 0;
    ${(props) =>
        props.flag ?
            css`
                width: 25px;
                height: 25px;
                @media(max-width:450px){
                    width: 20px;
                    height: 20px;
                }
            `
            :
            css`
                    width: 27px;
                    height: 27px;
                    @media(max-width:450px){
                    width: 25px;
                    height: 22px;
                }
            `
    }
`;

export const ContainerSociales = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:20%;
    position:relative;
    top:45px;
    & > a{
        color:white;
        text-decoration:none;
        margin:0;
        width:40px;
        height:40px;
            & > svg {
                color:white;
                width:35px;
                height:35px;
                &:hover{
                color:black;
            }
        }
    }
`;