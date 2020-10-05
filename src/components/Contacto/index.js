import React,{useState} from 'react';
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

  const [data,setData] = useState({
    from: '',
    subject: '',
    message: ''
  });

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
        swal('CodeLab','Mensaje Enviado!','success');
        setData({
          from: '',
          subject: '',
          message: ''
        })
      })
      .catch(error => swal('CodeLab','Lo siento hubo un error','error'))
      // console.error(error)
  }

  const handleChange = input => {
    setData({
      ...data,
      [input.target.name]: input.target.value
    })
  }

  return (
    <Section id='contacto'>
      <ContainerInfo>
        <Title>Contacto</Title>
        <Parr>
          Ingresa tus datos y te haremos llegar toda la
          información de nuestros paquetes y servicios.
        </Parr>
      </ContainerInfo>
      <Formulario onSubmit={handleSubmit} >
        <Input type='text' value={data.subject} name='subject' onChange={handleChange} placeholder='Asunto' />
        <Input type='text' value={data.from} name='from' onChange={handleChange} placeholder='Correo electrónico' />
        <TextBox type='text' value={data.message} name='message' onChange={handleChange} placeholder='Describe tu proyecto' />
        <Button>Enviar</Button>
      </Formulario>
    </Section>
  );
};

export default Contacto;