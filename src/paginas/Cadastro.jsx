 import React from 'react'
import FormCadastro from '../componentes/FormCadastro'
import './Cadastro.css'

const Cadastro = ({titulo}) => {
  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>{titulo}</h1>
        </div>
        <div className='corpo-cadastro'>
            <FormCadastro labelDinamica="valorTemporario">
            </FormCadastro>
        </div>
    </div>
  )
}

export default Cadastro
