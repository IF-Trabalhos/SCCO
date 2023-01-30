import React from 'react'
import BotãoSalvar from '../../../componentes/BotãoSalvar';

const CadastroFinanceiroRecorrente = ({primeiroInput, segundoInput}) => {
  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
        <div className='container-cadastro'>
            <div className='bloco'>
                <div>
                    <label htmlFor="primeiroInput">{primeiroInput}
                        <input type="text" name='primeiroInput'
                        required
                        />
                    </label>
                    </div>
                    <div>
                    <label htmlFor="segundoInput">{segundoInput}
                        <input type="text" name='segundoInput'
                        required
                        />
                    </label>
                    </div>
                    <div>
                    <label htmlFor="inputValor">
                        Valor Total:
                        <input type="number" />
                    </label>
                    </div>
                </div>
                <BotãoSalvar />
            </div>
        </div>
    </div>
  )
}

export default CadastroFinanceiroRecorrente
