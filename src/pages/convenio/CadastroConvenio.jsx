import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';

const CadastroConvenio = ({}) => {

  const {handle} = useParams() 

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');

  const [dados, setDados] = useState([]);

  async function buscar() {
    await axios.get(`${BASE_URL}/convenios/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setNome(dados.nome);
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
            <h2>Novo Cadastro</h2>
            <div>
                <label htmlFor="inputNome">Nome:
                    <input 
                    type="text" 
                    className='inputNome' 
                    value={nome}
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
                <BotãoSalvar pagina={'/convenio'} />
            </div>
        </div>
    </div>
  )
}

export default CadastroConvenio
