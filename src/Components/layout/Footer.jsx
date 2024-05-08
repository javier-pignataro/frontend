import React from 'react'
import ArrancArLogo from '../../assets/logo-dark-transparente.png'

const Footer = () => {
    return (
        <footer>
            <div className='footer__logo__div'>
                <div>
                    <img src={ArrancArLogo} alt="ArrancAR Logo" />
                    {/* <p>ArrancAR Argentina</p> */}
                </div>
                <p>COPYRIGHT 2024</p>
                {/* <br></br> */}
                {/* Todos los derechos reservados. */}
            </div>
            <div className='footer__socials'>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
            </div>
        </footer>
    )
}

export default Footer