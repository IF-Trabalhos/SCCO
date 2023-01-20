import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../config/axios';

const FormCadastroConvenio = () => {

  const[id, setId] = useState('');
  const[nome, setNome] = useState('');
  const[ans, setAns] = useState('');

  async function salvar() {
    let data = { id, nome, ans};
    data = JSON.stringify(data);
    await axios
      .post(`${BASE_URL}/convenios`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function(response) {
        console.log("Sucesso")
      })
      .catch(function(error) {
        console.log("Erro")
      })
  }

  return (
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
    
    </div>
  )
}

export default FormCadastroConvenio
