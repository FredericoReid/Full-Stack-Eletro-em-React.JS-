import React, {useState, useEffect} from 'react';


const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(async() => {
        const result = await fetch("http://localhost:8080/React6/fse/src/php/produtosapi.php");
        setProdutos(await result.json())
    }, [])


    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {   
                        produtos.map(value => {
                            return (
                                
                                <div className="col-sm-3">
                                    <div key={value.id}>
                                        <img src= {value.imagem} alt="a" width="120" height="120" /> 
                                        <h5>{value.descricao}</h5>
                                        <h5>R$:{value.preco}</h5>
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

export default Produtos;