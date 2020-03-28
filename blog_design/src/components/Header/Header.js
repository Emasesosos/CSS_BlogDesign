import React from 'react';
import logo from './../../img/logo.png';

const Header = () => {
    return (
        <header className="header hero">
            <div className="barra">
                <div className="contenedor">
                    <div className="logo">
                        <img src={logo} alt="logo" className="logo-img"/>
                    </div>
                    <div className="navegacion">
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/">Nosotros</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-contenido">
                <div className="contenedor">
                    <h1>Bienvenido al Blog de Viajes</h1>
                </div>
            </div>
        </header>
    );
}
 
export default Header;