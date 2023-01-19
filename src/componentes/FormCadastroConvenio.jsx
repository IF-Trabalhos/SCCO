import React from 'react'

const FormCadastroConvenio = () => {
  return (
    <div>
      <label htmlFor="inputNome">Nome:
        <input type="text" className='inputNome' required name='nome' />
      </label>
      <br />
      <label htmlFor="inputANS">Registro ANS:
      <input type="text" className='inputANS' required name='registroANS' />
      </label>
    
    </div>
  )
}

export default FormCadastroConvenio
