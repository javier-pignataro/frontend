import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-dark-transparente.png'
import logoLight from '../../assets/logo-light-transparente.png'
 

const Header = () => {
    return (
        <nav>
            <Link to='/'><img src={logoLight}></img> ArrancAR</Link>
            <div className='navbar__buttons'>
                <Link><button>Crear Cuenta</button></Link>
                <Link><button>Iniciar Sesión</button></Link>
            </div>
        </nav>
    )
}

export default Header