import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import './CadastroEspecialidade.css';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import MenuLateral from '../../componentes/MenuLateral';

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
          mensagemSucesso(`Especialidade ${nome} cadastrada com sucesso!`);
          navigate(`/especialidade`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${BASE_URL}/especialidades/${handle}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Especialidade ${nome} atualizada com sucesso!`);
          navigate(`/especialidade`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
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
    <div className='container'>
      <MenuLateral />
      <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Cadastro de Especialidade</h1>
        </div>
        <div className='corpo-cadastro'>
          <div className='container-cadastro'>
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
            <div className='botoesproc'>
              <BotãoSalvar funct={salvar} pagina={'especialidade'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroProcedimento