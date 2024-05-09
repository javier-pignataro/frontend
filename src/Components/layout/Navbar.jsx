import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
return (

    <nav> 
      <ul class="navegacion">
        <li>
          <Link>
            <a class="link">FAVORITOS</a>
          </Link>
        </li>
        <li>
          <Link>
            <a class="link">PROMOCIONES</a>
          </Link>
        </li>
        <li>
          <Link>
            <a class="link">GALERIA</a>
          </Link>
        </li>
      </ul>
      </nav>
    
  );
};

export default Navbar;