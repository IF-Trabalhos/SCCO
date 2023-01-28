import React from 'react'
import { useState } from 'react'
import BotãoSalvar from './BotãoSalvar';

const FormCadastroFatura = ({ primeiroInput, segundoInput, children }) => {
  const [primeiroDado, setPrimeiroDado] = useState("");
  const [segundoDado, setSegundoDado] = useState("");

  return (
    <div className='container-cadastro'>
      <div className='bloco'>
        <div>
          <label htmlFor="primeiroInput">{primeiroInput}
            <input type="text" name='primeiroInput'
              required
              onChange={(e) => setPrimeiroDado(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="segundoInput">{segundoInput}
            <input type="text" name='segundoInput'
              required
              onChange={(e) => setSegundoDado(e.target.value)} />
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
  )
}

export default FormCadastroFatura
