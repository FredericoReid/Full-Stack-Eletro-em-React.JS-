import React, {useState, useEffect} from 'react';

const ProductList = () => {

const [prods, setProds] = useState([]);

useEffect (async() => { 
    const res =  await fetch("http://localhost:3000/React3/fse/src/php/conexaoprodutos.php");
    setProds(await res.json());
    
}, []);

console.log (prods);

return ( 
    <>

        {prods.map (row => {
            return (
                <div key ={row.idproduto} className="caed col-sm-12 col-md-6 col-lg-3 border-light box item" style={{width:"13rem" , height:"25rem"}}>
                    <img src ={row.imagem} className="card-img-top img-thumbmail" alt={row.descricao} onMouseEnter={row.preco} onMouseLeave={row.precofinal}/>
                    <div className="card-body text center">
                        <h5 className="card-text font-weight-bold " style={{fontSize:"0.8rem"}}>{row.descricao}</h5>
                        <p className="card-title" style={{textDecoration:"linethrough"}}><strike>{row.preco}</strike></p>
                    </div>


                </div>            
            )         
    } )
    }   
    </>
    )   
}
export default ProductList;

