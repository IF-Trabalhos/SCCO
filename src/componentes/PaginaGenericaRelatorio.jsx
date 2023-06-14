import React from 'react'
import Tabela from "./Tabela";
import "./AddBotão.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const PaginaGenericaRelatorio = ({ titulo}) => {
  const navigate = useNavigate();

  const[dataInicial, setDataInicial] = useState(new Date());
  const[dataFinal, setDataFinal] = useState(new Date());

  const cadastrar = () => {
    navigate(`/relatorio/${titulo}/gerar-relatorio/${[dataInicial, dataFinal]}`);
  };

  const formatData = () => {
    const data = new Date();

    let dia= String(data.getDate()).padStart(2, '0');
    
    let mes = String(data.getMonth()+1).padStart(2,"0");
    
    let ano = data.getFullYear();

    let data_atual = `${ano}-${mes}-${dia}`;

    setDataInicial(data_atual)
    setDataFinal(data_atual)
    console.log(data_atual)
  }

  useEffect(() => {
    formatData(); // eslint-disable-next-line
  }, []);

  return (
    <div className='conteudo-principal'>
      <div className='cabeçalho-principal'>
        <h1>{titulo}</h1>
      </div>
      <div className='container-principal-central'>
        <div className='periodo'>

          <label htmlFor="dt-inicio" >DE:
            <input 
              type="date"
              value={dataInicial}
              onChange={(e) => setDataInicial(e.target.value)}
            />
          </label>
          <label htmlFor="dt-fim">ATÉ:
            <input 
              type="date"
              value={dataFinal}
              onChange={(e) => setDataFinal(e.target.value)}
            />
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
