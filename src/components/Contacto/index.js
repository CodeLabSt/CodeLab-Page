import React,{useState} from 'react';
import emailjs from 'emailjs-com'

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

const Contacto = () => {

  const [data,setData] = useState({
    from: '',
    subject: '',
    message: ''
  });
  
  const handleSubmit = form => {
    form.preventDefault()

    let emailDetails = {
      from_name: 'codelabst.com',
      from: data.from,
      subject: data.subject,
      message: data.message,
    }

    emailjs.send("service_2z3pzoy","template_e0lugdi",emailDetails,'user_2c1uosaLCjmm3BRDrhdka')
      .then(response => {
        swal('CodeLab','Mensaje Enviado!','success');
        setData({
          from: '',
          subject: '',
          message: ''
        })
      })
      .catch(error => {
        console.error(error)
        swal('CodeLab','Lo siento hubo un error','error')
      })
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
        <Input required type='text' value={data.subject} name='subject' onChange={handleChange} placeholder='Asunto' />
        <Input required type='text' value={data.from} name='from' onChange={handleChange} placeholder='Correo electrónico' />
        <TextBox required type='text' value={data.message} name='message' onChange={handleChange} placeholder='Describe tu proyecto' />
        <Button>Enviar</Button>
      </Formulario>
    </Section>
  );
};

export default Contacto;