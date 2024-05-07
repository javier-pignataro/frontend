import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to='/'><img src={logo}></img> ArrancAR</Link>
            <div className='navbar-buttons'>
                <Link><button>Crear Cuenta</button></Link>
                <Link><button>Iniciar Sesión</button></Link>
            </div>
        </nav>
    )
}

export default Header