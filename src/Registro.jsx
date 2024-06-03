import 'bootstrap/dist/css/bootstrap.min.css'
import './Registro.css'
import Formulario from './components/Formulario'
import SocialButton from './components/SocialButton'
import Alert from './components/Alert'
import Face from './assets/img/facebook.png'
import Linked from './assets/img/linkedin.png'
import Git from './assets/img/code.png'
import { useState } from 'react'

const Registro = () => {
  const [alerta, setAlerta] = useState({ msg: '', color: '' })

  return (
    <div className='conteiner d-flex justify-content-center flex-column align-items-center'>
      <SocialButton face={Face} linked={Linked} git={Git} />
      <Formulario seteador={setAlerta} /> {alerta.msg !== '' && <Alert alertaf={alerta} />}
    </div>
  )
}

export default Registro

