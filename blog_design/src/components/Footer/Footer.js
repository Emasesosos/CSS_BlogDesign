import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenedor">
                <div className="nosotros caja">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ab quia ea vitae harum voluptate nam laboriosam eos dicta quam adipisci ipsa temporibus sunt fugiat, natus quibusdam quae explicabo.Tenetur eligendi facilis distinctio! Nostrum quis nobis dolores ducimus, sapiente eaque recusandae odit, excepturi doloribus doloremque inventore tempore aspernatur adipisci asperiores quasi voluptatum quam quisquam voluptatibus! Illum, odio neque. Qui?</p>
                </div>
                <div className="entradas caja">
                    <h2>Últimas Entradas</h2>
                    <li><a href="/"><span>Lorem ipsum dolor sit amet.</span></a></li>
                    <li><a href="/"><span>Lorem ipsum dolor sit amet.</span></a></li>
                    <li><a href="/"><span>Lorem ipsum dolor sit amet.</span></a></li>
                    <li><a href="/"><span>Lorem ipsum dolor sit amet.</span></a></li>
                    <li><a href="/"><span>Lorem ipsum dolor sit amet.</span></a></li>
                </div>
                <div className="siguenos caja">
                    <h2>Síguenos</h2>
                    <nav className="sociales">
                        <ul>
                            <li>
                                <a href="http://facebook.com"><span> Facebook</span></a>
                            </li>
                            <li>
                                <a href="http://twitter.com"><span> Twitter</span></a>
                            </li>
                            <li>
                                <a href="http://youtube.com"><span> YouTube</span></a>
                            </li>
                            <li>
                                <a href="http://instagram.com"><span> Instagram</span></a>
                            </li>
                            <li>
                                <a href="http://pinterest.com"><span> Pinterest</span></a>
                            </li>
                        </ul>
                    </nav>
                </div> 
            </div>
            <p className="copyright">Blog de Viajes. Flexbox 2020 &copy;</p>
        </footer>
    );
}
 
export default Footer;