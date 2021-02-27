import React from 'react';
import {lazy, Suspense} from 'react';
// import Cabecalho from '../../components/Cabecalho';
// import Carrossel from '../../components/Carrossel';
// import Produtos from '../../components/Produtos';
const Cabecalho = lazy(() => import('../../components/Cabecalho'));
const Carrossel = lazy(() => import('../../components/Carrossel'));
const Produtos = lazy(() => import('../../components/Produtos'));

function Main(){
    return(
        <>
            <Suspense fallback={ <p>Carregando...</p> }><Cabecalho /></Suspense>
            <Suspense fallback={ <p>Carregando...</p> }><Carrossel /></Suspense>
            <Suspense fallback={ <p>Carregando...</p> }><Produtos /></Suspense>
            
        </>
    );
}

export default Main;