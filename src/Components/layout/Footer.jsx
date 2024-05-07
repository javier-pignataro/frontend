import React from 'react'
import ArrancArLogo from '../../assets/logo.png'
 
const Footer = () => {
    return (
        <footer>
            <div className='footer__logo__div'>
                <div>
                    <img src={ArrancArLogo} alt="ArrancAR Logo" />
                    <p>ArrancAR Argentina</p>
                </div>
                <p>2024 Todos los derechos reservados.</p>
            </div>
            <div className='footer__socials'>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
            </div>
        </footer>
    )
}

export default Footer