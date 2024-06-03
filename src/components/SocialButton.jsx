import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialButton({ facebookIcon, githubIcon, linkedinIcon }) {
    return (
        <>
            <div>
                <h2>Crea una Cuenta</h2>
            </div>
            <div className='social'>
                <div className='socialicon'>
                    <h3>  <FontAwesomeIcon icon={facebookIcon} /> </h3>
                </div>
                <div className='socialicon'>
                    <h3>  <FontAwesomeIcon icon={githubIcon} /> </h3>
                </div>
                <div className='socialicon'>
                    <h3>  <FontAwesomeIcon icon={linkedinIcon} /> </h3>
                </div>
            </div>
            <div><p>O usa tu mail para registrarte</p></div>
        </>
    );
}

export default SocialButton