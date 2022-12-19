import React from "react";
import BarraDePesquisa from "./BarraDePesquisa";
import Tabela from "./Tabela";
import AddBotão from "./AddBotão";

const TelaInicialGenerica = ({titulo}) => {
    return(
        <div className='container-principal-central'>
            <div className='cabeçalho-central'>
                <BarraDePesquisa />
                <AddBotão titulo={titulo} />
            </div>
            <div className='conteudo-principal-central'>
                <Tabela />
            </div>
        </div>
    )
}

export default TelaInicialGenerica