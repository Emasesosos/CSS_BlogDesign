import React, { Fragment } from 'react';
import img1 from './../../img/01.jpg'
import img2 from './../../img/02.jpg'
import img3 from './../../img/03.jpg'
import img4 from './../../img/04.jpg'
import img5 from './../../img/05.jpg'
import img6 from './../../img/06.jpg'

const Articulos = () => {
    return (
        <Fragment>

            <article className="entrada">
                <img src={img1} alt="texto entrada"/>
                <div className="contenido">
                    <h3>Tips para viajar con poco presupuesto</h3>
                    <p>Publicado el: <span>19 Julio, 2018</span></p>
                    <p>Por: <span>Blog Viajes</span></p>
                    <a href="/" className="boton"> Leer más</a>
                </div>
            </article>

            <article className="entrada">
                <img src={img2} alt="texto entrada"/>
                <div className="contenido">
                    <h3>Todo lo necesario para tu viaje</h3>
                    <p>Publicado el: <span>19 Julio, 2018</span></p>
                    <p>Por: <span>Blog Viajes</span></p>
                    <a href="/" className="boton"> Leer más</a>
                </div>
            </article>

            <article className="entrada">
                <img src={img3} alt="texto entrada"/>
                <div className="contenido">
                    <h3>El equipo necesario para tomar las mejores fotografías</h3>
                    <p>Publicado el: <span>19 Julio, 2018</span></p>
                    <p>Por: <span>Blog Viajes</span></p>
                    <a href="/" className="boton"> Leer más</a>
                </div>
            </article>

            <article className="entrada">
                <img src={img4} alt="texto entrada"/>
                <div className="contenido">
                    <h3>Checklist para tu próximo viaje</h3>
                    <p>Publicado el: <span>19 Julio, 2018</span></p>
                    <p>Por: <span>Blog Viajes</span></p>
                    <a href="/" className="boton"> Leer más</a>
                </div>
            </article>

            <article className="entrada">
                <img src={img5} alt="texto entrada"/>
                <div className="contenido">
                    <h3>Los mejores lugares para visitar este otoño</h3>
                    <p>Publicado el: <span>19 Julio, 2018</span></p>
                    <p>Por: <span>Blog Viajes</span></p>
                    <a href="/" className="boton"> Leer más</a>
                </div>
            </article>

            <article className="entrada">
                <img src={img6} alt="texto entrada"/>
                <div className="contenido">
                    <h3>Los mejores lugares para visitar con montañas</h3>
                    <p>Publicado el: <span>19 Julio, 2018</span></p>
                    <p>Por: <span>Blog Viajes</span></p>
                    <a href="/" className="boton"> Leer más</a>
                </div>
            </article>

        </Fragment>
    );
}
 
export default Articulos;