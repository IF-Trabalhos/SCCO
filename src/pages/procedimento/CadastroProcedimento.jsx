import React from 'react'
import BotãoSalvar from '../../componentes/BotãoSalvar';

const CadastroProcedimento = ({children}) => {
  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
            <div>
            <label htmlFor="inputNome">Nome:</label><input type="text" name='inputNome' className='nome' />
            <br/>
            {children}
            <label htmlFor="status">STATUS:</label>
            <input type="radio" className='inputAtivo' name='status' value="ATIVO"/>
            <label htmlFor="inputAtivo">ATIVO</label>
            <input type="radio" className='inputInativo' name='status' value="INATIVO"/>
            <label htmlFor="inputInativo">INATIVO</label>
            <BotãoSalvar/>
            </div>
        </div>
    </div>
  )
}

export default CadastroProcedimento
