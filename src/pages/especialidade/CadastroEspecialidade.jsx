import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import './CadastroEspecialidade.css';

const CadastroProcedimento = ({ children }) => {

  const { handle } = useParams()
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');

  const [dados, setDados] = useState([]);

  async function salvar() {
    let data = { nome, status };
    data = JSON.stringify(data);
    if (handle == null) {
      await axios
        .post(`${BASE_URL}/especialidades`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          navigate(`/especialidade`);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } else {
      await axios
        .put(`${BASE_URL}/especialidades/${handle}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          navigate(`/especialidade`);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${BASE_URL}/especialidades/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setNome(dados.nome);
    setStatus(dados.status);
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  return (
    <div className='conteudo-principal'>
      <div className="cabeçalho-principal">
        <h1>Cadastro de Especialidade</h1>
      </div>
      <div className='corpo-cadastro'>
        <div className='container-cadastro'>
          <h2>Novo Cadastro</h2>
          <div className='nome'>
            <label htmlFor="inputNome">Nome:</label>
            <input
              type="text"
              name='inputNome'
              className='nome'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div><div className='status'>
            {children}
            <label htmlFor="status">STATUS:</label>
            <input
              type="radio"
              className='inputAtivo'
              name='status'
              value="true"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="inputAtivo">ATIVO</label>
            <input
              type="radio"
              className='inputInativo'
              name='status'
              value="false"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="inputInativo">INATIVO</label>
            </div>
            <div className='botoesproc'>
            <BotãoSalvar funct={salvar} />
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default CadastroProcedimento
