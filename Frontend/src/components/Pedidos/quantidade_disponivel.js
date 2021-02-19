import React, {useState, useEffect} from 'react';


const Quantidade = () => {
    const [quantidade, setQuantidade] = useState([]);

    useEffect(async() => {
        const result = await fetch("http://localhost:5333/quantidade_produtos");
        setQuantidade(await result.json())
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {   
                        quantidade.map(value => {
                            return (
                                
                                <div className="col-sm-6">
                                    <div key={value.id}>
                                        <h5>Produto: {value.descricao}</h5>
                                        <h5>Quantidade disponível no estoque: {value.quantidade} unidades</h5>
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

export default Quantidade;