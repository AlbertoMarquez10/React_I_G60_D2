import React from 'react'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Formulario from './Formulario'
import SocialButton from './SocialButton'




function Registro() {
    return (
        <div>
            
     <SocialButton
     facebookIcon={faFacebook}
     githubIcon={faGithub}
     linkedinIcon={faLinkedinIn}
      />
    

     <Formulario/>
                
        </div>
    )
}

export default Registro