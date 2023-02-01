import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';

const CadastroProcedimento = ({children}) => {

  const {handle} = useParams() 

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');

  const [dados, setDados] = useState([]);
  const [dadosEspecialidade, setDadosEspecialidade] = useState([]);

  async function buscar() {
    await axios.get(`${BASE_URL}/procedimentos/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setNome(dados.nome);
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    axios.get(`${BASE_URL}/especialidades`).then((response) => {
        setDadosEspecialidade(response.data);
    });
  }, []);

  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
            <h2>Novo Cadastro</h2>
            <div>
            <label htmlFor="inputNome">Nome:</label>
            <input 
            type="text" 
            name='inputNome' 
            className='nome'
            value={nome}
            />
            <br/>
            <label htmlFor='inputEspecialidade'>Especialidade: </label>
            <select name="especialidades" id="especialidades">
                        {dadosEspecialidade.map(({id, nome}) => (
                            <option key={id} value={nome}>{nome}</option>
                        ))}
            </select>
            <br/>
            <label htmlFor="status">Status:</label>
            <input type="radio" className='inputAtivo' name='status' value="ATIVO"/>
            <label htmlFor="inputAtivo">ATIVO</label>
            <input type="radio" className='inputInativo' name='status' value="INATIVO"/>
            <label htmlFor="inputInativo">INATIVO</label>
            <BotãoSalvar pagina={'/procedimento'} />
            </div>
        </div>
    </div>
  )
}

export default CadastroProcedimento
