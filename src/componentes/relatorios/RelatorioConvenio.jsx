import React from 'react'
import { useState } from 'react'
import BotãoSalvar from '../BotãoSalvar'

const RelatorioConvenio = ({cabecalho, primeiroDadoLabel,primeiroDado,}) => {
  const getIntAleatorio =()=>{
    return Math.floor(Math.random()*100)
  }
  const getFloatAleatorio =() =>{
    return  (Math.random() * 500.2).toFixed(2)
  }
  const valorTotal = (getFloatAleatorio())
  const valorDescontado = ((valorTotal/100)* 20).toFixed(2)
  return (
    <div className='conteudo-principal'>  
      <div className='cabeçalho-principal'>
        <h1>Relatório</h1>
      </div>
      <div>
        <h2>Convênio</h2>
        <h3>De: 05/07/2022 Até: 25/10/2022</h3>
      </div>
      <div>
        <p>
          Pacientes atendidos: {getIntAleatorio()}
        </p>
        <p>
          Valor total: {valorTotal}
        </p>
        <p>
          Valor total a ser descontado: {valorDescontado}
        </p>
        <p>
          Valor a receber: {(valorTotal - valorDescontado).toFixed(2)}
        </p>
        <BotãoSalvar/>
      </div>
    </div>
  )
}

export default RelatorioConvenio
