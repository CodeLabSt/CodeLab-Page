import React,{useState,useEffect} from 'react';
import {
  Section,
  Title,
  Parr,
  ContainerInfo,
  Formulario,
  Input,
  TextBox,
  Button,
} from './styles';

import { ENTRYPOINT } from '../../config/entrypoint'

const Contacto = () => {

  const [showAnimation,setShowAnimation] = useState(false);

  const [data,setData] = useState({
    from: '',
    subject: '',
    message: ''
  })

  useEffect(
    function(){
      const onScroll = (e) => {
        const newShowAnimation = window.scrollY > 4100 && window.scrollY < 4850;
        showAnimation !== newShowAnimation && setShowAnimation(newShowAnimation);
      };
      document.addEventListener('scroll',onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showAnimation]
  );

  const handleSubmit = form => {
    form.preventDefault()
    fetch(`${ENTRYPOINT}/email`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setData({
          from: '',
          subject: '',
          message: ''
        })
      })
      .catch(error => console.error(error))
  }

  const handleChange = input => {
    setData({
      ...data,
      [input.target.name]: input.target.value
    })
  }

  return (
    <Section id='contacto'>
      <ContainerInfo flag={showAnimation}>
        <Title>Contacto</Title>
        <Parr>
          Ingresa tus datos y te haremos llegar toda la
          <br /> información de nuestros paquetes y servicios.
        </Parr>
      </ContainerInfo>
      <Formulario onSubmit={handleSubmit} >
        <Input flag={showAnimation} type='text' value={data.subject} name='subject' onChange={handleChange} placeholder='Asunto' />
        <Input flag={showAnimation} type='text' value={data.from} name='from' onChange={handleChange} placeholder='Correo electrónico' />
        <TextBox flag={showAnimation} type='text' value={data.message} name='message' onChange={handleChange} placeholder='Describe tu proyecto' />
        <Button flag={showAnimation}>Enviar</Button>
      </Formulario>
    </Section>
  );
};

export default Contacto;