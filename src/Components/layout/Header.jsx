import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-dark-transparente.png'

const Header = () => {
    return (
        <nav>
            <Link to='/'><img src={logo}></img> ArrancAR</Link>
            <div className='navbar__buttons'>
                <Link><button>Crear Cuenta</button></Link>
                <Link><button>Iniciar Sesión</button></Link>
            </div>
        </nav>
    )
}

export default Header