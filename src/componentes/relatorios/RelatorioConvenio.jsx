import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import BotãoSalvar from '../BotãoSalvar'
import './Relatorios.css';

const RelatorioConvenio = () => {
  const { handle } = useParams()

  const getIntAleatorio = () => {
    return Math.floor(Math.random() * 100)
  }

  const formatData = (data_input) => {
    const data = new Date(data_input)

    let dia = String(data.getDate()).padStart(2, "0");
    let mes = String(data.getMonth() + 1).padStart(2, "0");
    let ano = data.getFullYear();

    let data_formatada = dia + "/" + mes + "/" + ano;
    return data_formatada;
  }

  const datas = handle.split(",");
  const data_inicial = formatData(datas[0])
  const data_final = formatData(datas[1])

  const getFloatAleatorio = () => {
    return (Math.random() * 500.2).toFixed(2)
  }
  const valorTotal = (getFloatAleatorio())
  const valorDescontado = ((valorTotal / 100) * 20).toFixed(2)
  return (
    <div className='conteudo-principal'>
      <div className='cabeçalho-principal'>
        <h1>Relatório</h1>
      </div>
      <div className='container-principal-central'>
        <div className='formatador-relatorio'>
          <div>
            <h2 className='titulo-relatorio'>Convênio</h2>
            <h3 className='periodo-relatorio'>De: {data_inicial} Até: {data_final}</h3>
          </div>
          <div className='informacoes-completa'>
            <div className='informacoes'>
              Pacientes atendidos: {getIntAleatorio()}
            </div>
            <div className='informacoes'>
              Valor total: {valorTotal}
            </div>
            <div className='informacoes'>
              Valor total a ser descontado: {valorDescontado}
            </div>
            <div className='informacoes'>
              Valor a receber: {(valorTotal - valorDescontado).toFixed(2)}
            </div>
          </div>
          <div className='botoes'>
            <BotãoSalvar pagina={'relatorio/convenio'}/>
          </div>
        </div>
 
      </div>
    </div>

  )
}

export default RelatorioConvenio
