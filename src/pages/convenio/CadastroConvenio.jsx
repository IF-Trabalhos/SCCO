import React from 'react'
import BotãoSalvar from '../../componentes/BotãoSalvar';

const CadastroConvenio = ({}) => {
  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
            <div>
                <label htmlFor="inputNome">Nome:
                    <input 
                    type="text" 
                    className='inputNome' 
                    required name='nome' 
                    />
                </label>
                <br />
                <label htmlFor="inputANS">Registro ANS:
                    <input 
                    type="text" 
                    className='inputANS' 
                    required name='registroANS'
                    />
                </label>
                <BotãoSalvar />
            </div>
        </div>
    </div>
  )
}

export default CadastroConvenio
