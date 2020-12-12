import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
// import Main from '../../pages/Main/index';
// import Sobre from '../../pages/Sobre';
// import Pedidos from '../../pages/Pedidos/index';

function Cabecalho() {

    return(
        <>
            <div className="container" id="nav-container">
                <nav className="navbar navbar-expand-lg fixed-top">
                    
                    <Link className="navbar-brand" to="/" >
                        <img src="./imagens/logo.png" alt="Logo Full Stack Eletro"/> 
                    </Link>
                    <button className="navbaar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" 
                        aria-controls="navbar-links" arua-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
                        
                        <div className="navbar-nav">
                            <h5 className="nav-item nav-link" id="conta-menu"> Entre/Cadastre-se </h5>
                            <ul>
                                <li><h5 className="nav-item nav-link" id="produtos-menu"> Produtos </h5>
                                    <ul>
                                        <li>Celulares</li>
                                        <li>Eletrodomesticos
                                            <ul>
                                            <li onclick="exibirCateg('fogao')">Fogões</li>
                                            <li onclick="exibirCateg('microondas')">Microondas</li>
                                            <li onclick="exibirCateg('geladeira')">Geladeiras</li>
                                            <li onclick="exibirCateg('lavaroupas')">Máquinas de Lavar</li>
                                            <li onclick="exibirCateg('lavaloucas')">Lava - louças</li>
                                            </ul>
                                        </li>
                                        <li>Vestíveis</li>
                                        <li>Brinquedos</li>
                                        <li>Informática</li>
                                        <li>Cozinha</li>
                                    </ul>
                                </li>
                            </ul>  

                            
                            <div id="botao-sobre"><Link className="nav-item nav-link" id="sobre-menu" to="/sobre">Sobre</Link></div>
                            <h5 className="nav-item nav-link" id="unidades-menu"> Unidades </h5>
                            <Link className="nav-item nav-link" id="pedidos-menu" to="/pedidos">Peça!</Link>
                            
                            {/* <Route exact path="/" component={Main}/>
                            <Route path="/sobre" component={Sobre}/>
                            <Route path="/pedidos" component={Pedidos}/>                              */}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Cabecalho;