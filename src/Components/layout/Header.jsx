import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-dark-transparente.png'
import logoLight from '../../assets/logo-light-transparente.png'


const Header = () => {
    return (
        <nav>
            <Link to='/'><img src={logoLight}></img> Arranc<span className='arrancar__ar'>AR</span></Link>
            <div class="search">
                <input placeholder="Buscar autos..." type="text"></input>
                <button type="submit">Buscar 🔎</button>
            </div>
            <div className='navbar__buttons'>
                <Link><button>Crear Cuenta</button></Link>
                <Link><button>Iniciar Sesión</button></Link>
            </div>
        </nav>
    )
}

export default Header   