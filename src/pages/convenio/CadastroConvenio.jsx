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
                    onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="inputANS">Registro ANS:
                    <input 
                    type="text" 
                    className='inputANS' 
                    required name='registroANS'
                    onChange={(e) => setAns(e.target.value)} 
                    />
                </label>
                <BotãoSalvar trigger={botaoPopup} setBotaoFalse = {setBotaoPopup}/>
            </div>
        </div>
    </div>
  )
}

export default CadastroConvenio
