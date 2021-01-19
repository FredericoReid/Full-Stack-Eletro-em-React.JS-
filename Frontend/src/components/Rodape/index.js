import React from 'react';
import './styles.css';

function Rodape(){
    return (
        <>
            <div className="rodape">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 text-center" id="formas-pagamento"><h5> Formas de Pagamento: </h5></div>
                        <div className="col-sm-12 text-center">
                            <div className="imagens">
                                <img src="./imagens/mastercard.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                                <img src="./imagens/visa.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                                <img src="./imagens/maestro.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                                <img src="./imagens/bitcoin.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                                <img src="./imagens/paypal.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                                <img src="./imagens/discover.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                                <img src="./imagens/amazon.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                                <img src="./imagens/apple.jpeg" id="imagem-cartao" alt="forma de pagamento" width="50" height="50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            
        </>
    )
}

export default Rodape;