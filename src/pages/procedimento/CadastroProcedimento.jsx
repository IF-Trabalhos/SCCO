import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import './Procedimento.css';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import MenuLateral from '../../componentes/MenuLateral';

const CadastroProcedimento = ({ children }) => {

  const { handle } = useParams()
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [especialidadeId, setEspecialidadeId] = useState(1);
  const [valor, setValor] = useState('900');

  const [dados, setDados] = useState([]);
  const [dadosEspecialidade, setDadosEspecialidade] = useState([]);

  async function salvar() {
    let data = { nome, status, especialidadeId, valor };
    data = JSON.stringify(data);
    if (handle == null) {
      await axios
        .post(`${BASE_URL}/procedimentos`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Procedimento ${nome} cadastrado com sucesso!`);
          navigate(`/procedimento`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${BASE_URL}/procedimentos/${handle}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Procedimento ${nome} atualizado com sucesso!`);
          navigate(`/procedimento`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
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
    setEspecialidadeId(dados.especialidadeId)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/especialidades`).then((response) => {
      setDadosEspecialidade(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  return (
    <div className='container'>
      <MenuLateral />
      <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Cadastro de Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
          <div className="container-cadastro">
            <h2>Novo Cadastro</h2>
            <label htmlFor='inputNome' className='required'>Nome:
              <br />
              <input
                type="text"
                name='inputNome'
                value={nome}
                required
                maxLength={255}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>


            <label htmlFor="inputValor" className="required">
              Valor:
              <br />
              <input
                type="number"
                name="inputValor"
                className="valor"
                value={valor}
                required
                onChange={(e) => setValor(e.target.value)}
              />
            </label>

            <label htmlFor='inputEspecialidade'>Especialidade:
              <select
                name="especialidades"
                id="especialidades"
                required
                className='custom-select'
                onChange={(e) => setEspecialidadeId(e.target.value)}
              >
                {dadosEspecialidade.map(({ id, nome }) => (
                  <option
                    key={id}
                    value={id}
                    selected={especialidadeId === id ? 'selected' : ''}
                  >{nome}
                  </option>
                ))}
              </select>
            </label>


            <label htmlFor="status">Status:</label>
            <div className="status-options">
              <div className="status-option">
                <input
                  type="radio"
                  id="inputAtivo"
                  name="status"
                  value="true"
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="inputAtivo">ATIVO</label>
              </div>
              <div className="status-option">
                <input
                  type="radio"
                  id="inputInativo"
                  name="status"
                  value="false"
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="inputInativo">INATIVO</label>
              </div>
            </div>
          </div>
          <div className='botaoproc'>
            <BotãoSalvar funct={salvar} pagina={'procedimento'} />
          </div>
        </div>
                  
      </div>
    </div>
  )
}

export default CadastroProcedimento