import React  from 'react';
import Cabecalho from '../../components/Cabecalho/index';
import Conteudo from './sobre_conteudo'


function Sobre(){

    /* o conteudo não é um componente, ele se encontra na pasta 'Pages/Sobre */
    return(
        <>
            <Cabecalho />
            <Conteudo /> 
        </>
    )
}

export default Sobre;