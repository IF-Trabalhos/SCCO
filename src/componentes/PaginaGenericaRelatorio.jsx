import React from 'react'
import BarraDePesquisa from "./BarraDePesquisa";
import Tabela from "./Tabela";
import AddBotão from "./AddBotão";
import { Link } from "react-router-dom";
import MenuLateral from './MenuLateral';

const PaginaGenericaRelatorio = ({ titulo, pessoa, colunas, linhas }) => {
  return (
    <div className="container">
      <MenuLateral />
      <div className='conteudo-principal'>
        <div className='cabeçalho-principal'>
          <h1>{titulo}</h1>
        </div>
        <div className='container-principal-central'>
          <div className='periodo'>

            <label htmlFor="dt-inicio" >DE:
              <input type="date" />
            </label>
            <label htmlFor="dt-fim">ATÉ:
              <input type="date" />
            </label>

          </div>
          <div className='cabeçalho-central'>
            <BarraDePesquisa />
            <Link className="add-botão" to={"gerar-relatorio"}>
              Gerar {titulo}
            </Link>
          </div>
          <div className='conteudo-principal-central'>
            <Tabela pessoa={pessoa} colunas={colunas} linhas={linhas} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaginaGenericaRelatorio
