import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialButton({ facebookIcon, githubIcon, linkedinIcon }) {
    return (
        <>
            <div>
                <h1>Crea una Cuenta</h1>
            </div>
            <div>
                <div>
                    <h2>  <FontAwesomeIcon icon={facebookIcon} /> </h2>
                </div>
                <div>
                    <h2>  <FontAwesomeIcon icon={githubIcon} /> </h2>
                </div>
                <div>
                    <h2>  <FontAwesomeIcon icon={linkedinIcon} /> </h2>
                </div>
            </div>
        </>
    );
}

export default SocialButton