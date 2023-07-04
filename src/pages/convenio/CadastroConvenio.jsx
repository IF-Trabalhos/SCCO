import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import './CadastroConvenio.css';
import MenuLateral from '../../componentes/MenuLateral'
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import { formatarTelefone } from '../../data/utils';

const CadastroConvenio = () => {

  const { handle } = useParams()
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [registroAns, setRegistroAns] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [desconto, setDesconto] = useState('');

  const [dados, setDados] = useState([]);

  async function salvar() {
    let data = { nome, registroAns, email, telefone, desconto };
    data = JSON.stringify(data);
    if (handle == null) {
      await axios
        .post(`${BASE_URL}/convenios`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Convenio ${nome} cadastrado com sucesso!`)
          navigate(`/convenio`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${BASE_URL}/convenios/${handle}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Convenio ${nome} atualizado com sucesso!`)
          navigate(`/convenio`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${BASE_URL}/convenios/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setNome(dados.nome);
    setRegistroAns(dados.registroAns);
    setEmail(dados.email);
    setTelefone(dados.telefone);
    setDesconto(dados.desconto);
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  return (
    <div className='container'>
      <MenuLateral />
      <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Cadastro de Convênio</h1>
        </div>
        <div className='corpo-cadastro'>
          <div className="container-cadastro">
            <div className='nome'>
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
            </div>
            <div className='desconto'>
              <label htmlFor="inputDesconto" className='required'>Desconto:
              <br/>
              <input
                type="number"
                className='inputDesconto'
                value={desconto}
                required

                name='desconto'
                onChange={(e) => setDesconto(e.target.value)}
              />
              </label>
            </div>

            <div className='email'>
              <label htmlFor='inputEmail'>Email:
              <br/>
              <input
                type="text"
                className='inputEmail'
                required
                name='inputEmail'
                value={email}
                maxLength={255}
                onChange={(e) => setEmail(e.target.value)}
              />
              </label>
            </div>

            <div className='telefone'>
              <label htmlFor='inputTelefone' className='required'>Telefone:
              <br/>
              <input
                type="text"
                value={telefone}
                className='inputTelefone'
                name='telefone'
                required
                maxLength={15}
                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              />
              </label>
            </div>

            <div className='ans'>
              <label htmlFor="inputANS" className='required'>Registro ANS:
              <br/>
              <input
                type="text"
                className='inputANS'
                required
                name='registroANS'
                value={registroAns}
                maxLength={8}
                onChange={(e) => setRegistroAns(e.target.value)}
              />
              </label>
            </div>
            <div className='botaoproc'>
              <BotãoSalvar funct={salvar} pagina={'convenio'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroConvenio