import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const Formulario = ({ seteador }) => {
  const [nombre, setNombre] = useState('')
  const capturaNombre = (e) => setNombre(e.target.value)
  const [email, setEmail] = useState('')
  const capturaEmail = (e) => setEmail(e.target.value)
  const [pass, setPass] = useState('')
  const capturaPass = (e) => setPass(e.target.value)
  const [cpass, setCpass] = useState('')
  const capturaCpass = (e) => setCpass(e.target.value)
  const validarForm = (e) => {
    e.preventDefault()
    if (nombre.trim() === '' || email.trim() === '' || pass.trim() === '' || cpass.trim() === '') {
      seteador({ msg: 'Todos los campos son obligatorios', color: 'danger' })
    } else if (pass != cpass) {
      seteador({ msg: 'Las contraseñas deben ser igual, reescribir su contraseña', color: 'warning' })
    } else {
      seteador({ msg: 'Su registro fue exitoso', color: 'success' })
      setNombre('')
      setEmail('')
      setPass('')
      setCpass('')
    }
  }

  return (
    <Form onSubmit={validarForm}>
      <Form.Group className='mb-3' controlId='nombreusuario'>
        <Form.Control type='text' placeholder='Nombre' onChange={capturaNombre} value={nombre} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='emailusuario'>
        <Form.Control type='email' placeholder='tuEmail@tudominio.com'onChange={capturaEmail} value={email} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='contraseñausuario'>
        <Form.Control type='password' placeholder='Contraseña' onChange={capturaPass} value={pass} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='confirmacioncontraseña'>
        <Form.Control type='password' placeholder='Confirma tu contraseña' onChange={capturaCpass} value={cpass} />
      </Form.Group>
      <div className='d-grid text-center'>
        <Button variant='primary' type='submit' className='btn btn-success'>
          Registrate
        </Button>
      </div>
    </Form>
    
    
  )
}

export default Formulario
