import React from 'react';
// import Cabecalho from '../../components/Cabecalho';
import Formulario from '../../components/Pedidos/pedidos_formulario';
import Pedidos from '../../components/Pedidos/pedidos_feitos';
import Quantidade from '../../components/Pedidos/quantidade_disponivel';

function Pedidos1() {

    return(
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <Formulario />
                        <br />
                        <h4>Quantidade de produtos disponíveis no estoque: </h4>
                        <Quantidade />

                    </div>

                    <div className="col-sm-6">
                        <h4>Pedidos Realizados: </h4>
                        <br />
                        <Pedidos />
                    </div>
                </div>
            </div>           
        </>                     
    )   
}
export default Pedidos1;