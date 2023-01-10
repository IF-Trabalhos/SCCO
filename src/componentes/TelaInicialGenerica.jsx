import React from "react";
import BarraDePesquisa from "./BarraDePesquisa";
import Tabela from "./Tabela";
import AddBotão from "./AddBotão";
import { Link } from "react-router-dom";

const TelaInicialGenerica = ({titulo, colunas , linhas}) => {
    return(
        <div className='container-principal-central'>
            <div className='cabeçalho-central'>
                <BarraDePesquisa />
                <Link className="add-botão" to={"cadastro"}>
                    Adicionar {titulo}
                </Link>
            </div>
            <div className='conteudo-principal-central'>
                <Tabela colunas={colunas} linhas={linhas} />
            </div>
        </div>
    )
}

export default TelaInicialGenerica