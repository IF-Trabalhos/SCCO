import React from 'react'
import Tabela from "./Tabela";
import "./AddBotão.css";
import { useNavigate } from "react-router-dom";

const PaginaGenericaRelatorio = ({ titulo}) => {
  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/relatorio/${titulo}/gerar-relatorio`);
};

  return (
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
          <button onClick={() => cadastrar()} className="add-botão">
              Adicionar Relatório {titulo}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaginaGenericaRelatorio
