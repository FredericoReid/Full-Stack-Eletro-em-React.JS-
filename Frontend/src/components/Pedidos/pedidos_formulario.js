import React from 'react';


function Pedidos() {

    return(
        <>
            <div className="row" >
                <div className="col-12" >
                    
                    <form className="col-lg-12" action='http://localhost:5333/processamento_pedidos' method="POST" >

                        <div className="col-12">
                            <input className="form-control" type="nome_cliente" id="nome" name="nome_cliente" placeholder="Nome completo" required />
                        </div>

                        <br />

                        <div className="col-12">
                            <input className="form-control" type="endereco" id="endereco" name="endereco" placeholder="Endereço para entrega" required />
                        </div>

                        <br />

                        <div className="col-12">
                            <input className="form-control" type="email" id="email" name="email" placeholder="Email para contato" required />
                        </div>

                        <br />

                        <div className="col-12">
                            <input className="form-control" type="telefone" id="telefone" name="telefone" placeholder="Telefone para contato" required />
                        </div>

                        <br />

                        <div className = "col-12 opcoes_produtos">
                            <label for="">Selecione seu Produto:</label>
                            <select className="form-control" name = "produto">
                                <option value="FOGAO 4 BOCAS">Fogão 4 bocas</option>
                                <option value="FOGAO ATLAS">Fogão ATLAS</option>
                                <option value="MICROONDAS ELETROLUX">Microondas Eletrolux</option>
                                <option value="MICROONDAS PHILCO">Microondas Philco</option>
                                <option value="MICOONDAS CONSUL">Microondas Consul</option>
                                <option value="GELADEIRA BRASTEMP">Geladeira Brastemp</option>
                                <option value="GELADEIRA TRÊS PORTAS">Geladeira três portas</option>
                                <option value="GELADEIRA DODGE">Geladeira Dodge</option>
                                <option value="MAQUINA DE LAVAR ELECTROLUX">Maquina de Lavar Eletrolux</option>
                                <option value="MAQUINA DE LAVAR PHILCO">Maquina de Lavar Philco</option>
                                <option value="LAVADORA DE PRATOS TORPENTE">Lavadora de Pratos Torpente</option>
                                <option value="LAVADORA DE PRATOS ELECTROLUX">Lavadora de Pratos Electrolux</option>
                            </select>
                        </div>
                        

                        <div className = "col-12 quantidade_produtos"> 
                        <label for="">Selecione a quantidade:</label>
                        <select className="form-control" name="quantidade">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        </div>

                        <br />

                        <div className="col text-center">
                            <button type="submit" className="col-sm-3 btn btn-success"><b>Enviar Pedido</b></button> 
                        </div>  
                        <br />
                        <br />

                    </form>
                </div>                    
            </div>
        </>                     
    )   
}
export default Pedidos;