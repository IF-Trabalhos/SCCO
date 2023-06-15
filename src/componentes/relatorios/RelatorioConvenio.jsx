import React from 'react'
import { useState } from 'react'
import BotãoSalvar from '../BotãoSalvar'
import './Relatorios.css';
import MenuLateral from '../MenuLateral';

const RelatorioConvenio = () => {
  const getIntAleatorio = () => {
    return Math.floor(Math.random() * 100)
  }
  const getFloatAleatorio = () => {
    return (Math.random() * 500.2).toFixed(2)
  }
  const valorTotal = (getFloatAleatorio())
  const valorDescontado = ((valorTotal / 100) * 20).toFixed(2)
  return (
    <div className="container">
      <MenuLateral />
      <div className='conteudo-principal'>
        <div className='cabeçalho-principal'>
          <h1>Relatório</h1>
        </div>
        <div className='container-principal-central'>
          <div className='formatador-relatorio'>
            <div>
              <h2 className='titulo-relatorio'>Convênio</h2>
              <h3 className='periodo-relatorio'>De: 05/07/2022 Até: 25/10/2022</h3>
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
              <BotãoSalvar />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RelatorioConvenio
