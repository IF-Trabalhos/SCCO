 import React from 'react'
import FormCadastro from '../componentes/FormCadastroPessoa'
import './Cadastro.css'

const Cadastro = ({titulo, componenteCadastro}) => {
  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>{titulo}</h1>
        </div>
        <div className='corpo-cadastro'>
            <h2>Novo Cadastro</h2>
            {componenteCadastro}
        </div>
    </div>
  )
}

export default Cadastro
