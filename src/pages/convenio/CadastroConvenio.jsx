import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import MenuLateral from '../../componentes/MenuLateral'
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';

const CadastroConvenio = () => {

  const {handle} = useParams() 
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [registroAns, setRegistroAns] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [desconto, setDesconto] = useState('');

  const [dados, setDados] = useState([]);

  async function salvar() {
    let data = { nome, registroAns, email, telefone, desconto};
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
              <h2>Novo Cadastro</h2>
              <div>
                  <label htmlFor="inputNome">Nome:
                      <input 
                      type="text" 
                      className='inputNome' 
                      value={nome}
                      required name='nome' 
                      onChange={(e) => setNome(e.target.value)}
                      />
                  </label>
                  <br />
                  <label htmlFor='inputEmail'>Email: 
                    <input 
                        type="email" 
                        className='inputEmail' 
                        required name='inputEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                  </label>
                  <br />
                  <label htmlFor="inputANS">Registro ANS:
                      <input 
                      type="text" 
                      className='inputANS' 
                      required name='registroANS'
                      value={registroAns}
                      onChange={(e) => setRegistroAns(e.target.value)}
                      />
                  </label>
                  <BotãoSalvar funct={salvar} pagina={'convenio'} />
              </div>
          </div>
      </div>
    </div>
  )
}

export default CadastroConvenio