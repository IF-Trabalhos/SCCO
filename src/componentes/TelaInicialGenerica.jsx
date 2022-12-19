import React from "react";
import BarraDePesquisa from "./BarraDePesquisa";
import Tabela from "./Tabela";
import AddBotão from "./AddBotão";

const TelaInicialGenerica = ({titulo, colunas , linhas}) => {
    return(
        <div className='container-principal-central'>
            <div className='cabeçalho-central'>
                <BarraDePesquisa />
                <AddBotão titulo={titulo} />
            </div>
            <div className='conteudo-principal-central'>
                <Tabela colunas={colunas} linhas={linhas} />
            </div>
        </div>
    )
}

export default TelaInicialGenerica