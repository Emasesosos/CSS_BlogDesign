import React from 'react';

const Categorias = () => {
    return (
        <div className="categorias">
            <ul>
                <li>
                    <a href="/">
                        <i className="fas fa-map-pin"></i>
                        Actividades
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fas fa-music"></i>
                        Festivales
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fas fa-utensils"></i>
                        Restaurants
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fas fa-check"></i>
                        Tips
                    </a>
                </li>
            </ul>
        </div>
    );
}
 
export default Categorias;