import React, {useState, useEffect} from 'react';


const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(async() => {
        const result = await fetch("http://localhost:8080/Full Stack Eletro React.JS - Ultima Versão/src/php/produtosapi.php");
        setProdutos(await result.json())
    }, [])

let destaque = (event) => {
    if (event.target.style.width === "260px") {
        event.target.style.width = "120px";
    }
    else {
        event.target.style.width = "260px";
        event.target.style.height = "260px"
    }
}

let redimensiona = (event) => {
    if (event.target.style.width === "120px") {
        event.target.style.width = "260px";
    }
    else {
        event.target.style.width = "120px";
        event.target.style.height = "120px"
    }
}


    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {   
                        produtos.map(value => {
                            return (
                                
                                <div className="col-sm-3">
                                    <div key={value.id}>
                                        <img src= {value.imagem} alt="a" width="120" height="120" onMouseOver={destaque}
                                            onMouseOut={redimensiona}/> 
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