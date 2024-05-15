import React from 'react'
import { Link } from 'react-router-dom'
import ArrancArLogo from '../../assets/logo-dark-transparente.png'
import xLogo from '../../assets/x.png'
import instagramLogo from '../../assets/instagram.png'




const Footer = () => {


 
        const showIcons = (e) => {
                 alert("SITIO EN DESARROLLO")
                 e.preventDefault(); 

        }
         
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
            <div className='footer__links__div'>
                <Link to='/about'>Sobre nosotros</Link>
                <Link to='/legal'>Legal</Link>
                <Link to='/administracion'>Administración</Link>
            </div>
            <div className='footer__socials'>




                
                <a href="" onClick={showIcons}>
                    <img src={xLogo} alt="" />
                </a>
                <a href="" onClick={showIcons}>
                    <img src={instagramLogo} alt="" />
                </a>
             </div>
        </footer>
    )
}

export default Footer;