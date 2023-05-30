import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import './Procedimento.css';
const CadastroProcedimento = ({children}) => {

  const {handle} = useParams() 
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [valor, setValor] = useState('');

  const [dados, setDados] = useState([]);
  const [dadosEspecialidade, setDadosEspecialidade] = useState([]);

  async function salvar() {
    let data = { nome, status, valor};
    data = JSON.stringify(data);
    if (handle == null) {
      await axios
        .post(`${BASE_URL}/procedimentos`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          navigate(`/procedimento`);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } else {
      await axios
        .put(`${BASE_URL}/procedimentos/${handle}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          navigate(`/procedimento`);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${BASE_URL}/procedimentos/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setNome(dados.nome);
    setStatus(dados.status);
    setValor(dados.valor);
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
          <h1>Cadastro de Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
            <h2>Novo Cadastro</h2>
          <div className='espec'>
            <label htmlFor="inputNome">Nome:</label>
            <input 
            type="text" 
            name='inputNome' 
            className='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <br/>
            <label htmlFor='inputEspecialidade'>Especialidade: </label>
            <select name="especialidades" id="especialidades" className='custom-select'>
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
            <BotãoSalvar funct={salvar} />
          </div>
        </div>
    </div>
  )
}

export default CadastroProcedimento
