import React from 'react'
import ArrancArLogo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo-div'>
                <div>
                    <img src={ArrancArLogo} alt="ArrancAR Logo" />
                    <p>ArrancAR Argentina</p>
                </div>
                <p>2024 Todos los derechos reservados.</p>
            </div>
            <div className='footer-socials'>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
            </div>
        </footer>
    )
}

export default Footer