import React , { useState,useEffect } from 'react';
import HamburgerMenu from '../../images/menu.svg';
import CloseMenu from '../../images/cancel.svg';
import { FaInstagram, FaGithub, FaWhatsapp, } from 'react-icons/fa';
import { Menu , Modal, LogoModal, ContainerImg, Img, ContainerSociales} from './styles.js';
import Logo from '../../images/LogoBlancoPng.png';

export const NavBar = () => {

    const [mobileMenu,setMobileMenu] = useState(false);
    const [expanded,setExpanded] = useState(false);
    const [showModal,setShowModal] = useState(false);

    const handleMobileMenu = () => {
        
        if(!expanded){
            setExpanded(true);
            setMobileMenu(true);
        }else{
            setExpanded(false);
            setMobileMenu(false);
        }
        console.log(expanded);
    }

    useEffect(
        function(){
        const onScroll = (e) => {
            const newShowModal = window.scrollY > 0;
            showModal !== newShowModal && setShowModal(newShowModal);
        };
        document.addEventListener('scroll',onScroll);
        return () => document.removeEventListener('scroll', onScroll);
        },
        [showModal]
    );

    const Icon = mobileMenu ? CloseMenu : HamburgerMenu;

    return (
        <Menu scroll={showModal}>
            <LogoModal src={Logo} alt='logo' />
            <ContainerImg onClick={handleMobileMenu} >
                <Img src={Icon} flag={mobileMenu} alt='mobile-menu' />
            </ContainerImg>
            <Modal isActive={expanded}>
                <a href='#inicio'>Inicio</a>
                <a href='#nosotros'>Nosotros</a>
                <a href='#servicios'>Servicios</a>
                <a href='#portafolio'>Portafolio</a>
                <a href='#contacto'>Contacto</a>
                <ContainerSociales>
                    <a href="https://www.instagram.com/codelab.studio/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/CodeLabSt" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://wa.link/8f9uud" target="_blank">
                        <FaWhatsapp />
                    </a>
                </ContainerSociales>
            </Modal>
        </Menu>
    )
} 
