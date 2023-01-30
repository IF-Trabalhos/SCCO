import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";
import { useState } from "react";

const PaginaGenerica = ({titulo, coluna, linha, setInfo}) => {
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>{titulo}</h1>
            </div>
            <TelaInicialGenerica titulo={titulo} colunas={coluna} linhas={linha} setInfo={setInfo} />
        </div>
    )
}

export default PaginaGenerica