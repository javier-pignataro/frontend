import React from 'react'
import { Link } from 'react-router-dom'
import logoConTitulo from '../../assets/ArrancAR logo con titulo sin fondo.png'

const Header = () => {
    return (
        <nav>
            <Link to='/'><img src={logoConTitulo} /></Link>
            <div className='navbar__buttons'>
                <Link><button>Crear Cuenta</button></Link>
                <Link><button>Iniciar Sesión</button></Link>
            </div>
        </nav>
    )
}

export default Header   