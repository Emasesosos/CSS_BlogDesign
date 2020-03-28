import React from 'react';
import Articulos from './../Articulos/Articulos';
import Categorias from './../Categorias/Categorias';

const Main = () => {
    return (
        <div className="contenedor">
            <main className="contenido-principal">
                <h2>Últimas Entradas</h2>
                <Articulos/>
            </main>
            <Categorias/>
        </div>
        
    );
}
 
export default Main;