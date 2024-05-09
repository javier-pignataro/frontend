import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-dark-transparente.png";
import logoLight from "../../assets/logo-light-transparente.png";
import Navbar from "./Navbar";
import Input from "./Input";



const Header = () => {
  return (
    <>
    <div className="container__header">
      <div className="container__logo"> 
        <Link to="/">
          <img src={logoLight}></img>
          {/* <span>ArrancAR</span> */}
        </Link>
      </div>
      <div className="container__navegacion">
        {/* <Navbar/> */}
        <Input/>
      </div>
        
      <div className='navbar__buttons'>
          <Link><button>Crear Cuenta</button></Link>
          <Link><button>Iniciar Sesión</button></Link>
      </div>
    </div>
    </>
  );
};

export default Header;
