import React from 'react'
import BarraDePesquisa from "./BarraDePesquisa";
import Tabela from "./Tabela";
import AddBotão from "./AddBotão";
import { Link } from "react-router-dom";

const PaginaGenericaRelatorio = ({ titulo, pessoa, colunas, linhas }) => {
  return (
    <div className='conteudo-principal'>
      <div className='cabeçalho-principal'>
        <h1>{titulo}</h1>
      </div>
      <div className='container-principal-central'>
        <div className='cabeçalho-central'>
          <div>
            <label htmlFor="dt-inicio">DE:
            <input type="date"/></label>
            <label htmlFor="dt-fim">ATÉ:
            <input type="date"/></label>
          
            <BarraDePesquisa />
            <Link className="add-botão" to={"cadastro"}>
              Adicionar {titulo}
            </Link>
          </div>
        </div>
        <div className='conteudo-principal-central'>
          <Tabela pessoa={pessoa} colunas={colunas} linhas={linhas} />
        </div>
      </div>
    </div>
  )
}

export default PaginaGenericaRelatorio
