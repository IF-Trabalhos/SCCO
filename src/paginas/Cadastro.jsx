 import React from 'react'
import FormCadastro from '../componentes/FormCadastro'


const Cadastro = ({titulo}) => {
  return (
    <div>
        <div className="header-cadastro">
          <h3>{titulo}</h3>
        </div>
        <div className='body-cadastro'>
            <FormCadastro labelDinamica="valorTemporario">
            </FormCadastro>
            
        </div>
    </div>
  )
}

export default Cadastro
