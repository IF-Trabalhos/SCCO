import React from 'react'

const FormCadastroItem = ({children}) => {
  return (
    <div>
      <label htmlFor="inputNome">Nome:</label><input type="text" name='inputNome' className='nome' />
      <br/>
      {children}
      <label htmlFor="status">STATUS:</label>
      <input type="radio" className='inputAtivo' name='status' value="ATIVO"/>
      <label htmlFor="inputAtivo">ATIVO</label>
      <input type="radio" className='inputInativo' name='status' value="INATIVO"/>
      <label htmlFor="inputInativo">INATIVO</label>

    </div>
  )
}

export default FormCadastroItem
