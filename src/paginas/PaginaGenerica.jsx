import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const PaginaGenerica = ({titulo, coluna, linha}) => {
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>{titulo}</h1>
            </div>
            <TelaInicialGenerica titulo={titulo} colunas={coluna} linhas={linha} />
        </div>
    )
}

export default PaginaGenerica