import React, {useState, useEffect} from 'react';


const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(async() => {
        const result = await fetch("http://localhost:5333/pedidos");
        setPedidos(await result.json())
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {   
                        pedidos.map(value => {
                            return (
                                
                                <div className="col-sm-6">
                                    <div key={value.id}>
                                        <h5>Cliente: {value.nome_cliente}</h5>
                                        <h5>Produto: {value.nome_produto}</h5>
                                        <h5>Valor Unitario R$: {value.valor_unitario}</h5>
                                        <h5>Quantidade: {value.quantidade} unidades</h5>
                                        <h5>Valor total R$: {value.valor_total}</h5>
                                        <br /> 
                                    </div>
                                </div>
                            )
                        })     
                    }
                </div>
            </div>
        </>
    )
}

export default Pedidos;