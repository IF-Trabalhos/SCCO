import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import './CadastroDentista.css';
import { BASE_URL2 } from '../../config/axios';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import 'reactjs-toastr/lib/toast.css';
import MenuLateral from '../../componentes/MenuLateral';

const CadastroDentista = () => {
  const { handle } = useParams()
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cro, setCro] = useState('');
  const [cpf, setCpf] = useState('');
  const [especialidadeId, setEspecialidadeId] = useState(1);
  const [email, setEmail] = useState('');
  const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
  const [telefone, setTelefone] = useState('');
  const [rg, setRg] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');

  const [dados, setDados] = useState([]);
  const [dadosEspecialidade, setDadosEspecialidade] = useState([]);

  async function salvar() {
    let data = {
      nome, cro, dataDeNascimento, cpf, email, especialidadeId, telefone,
      rg, logradouro, bairro, uf, cidade, complemento, cep, numero
    };
    data = JSON.stringify(data);
    if (handle == null) {
      await axios
        .post(`${BASE_URL2}/dentistas`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Dentista ${nome} cadastrado com sucesso!`)
          navigate(`/dentista`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data)
        });
    } else {
      await axios
        .put(`${BASE_URL2}/dentistas/${handle}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Dentista ${nome} atualizado com sucesso!`)
          navigate(`/dentista`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${BASE_URL2}/dentistas/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setCro(dados.cro)
    setRg(dados.rg);
    setNome(dados.nome);
    setCpf(dados.cpf);
    setEspecialidadeId(dados.especialidadeId);
    setDataDeNascimento(dados.dataDeNascimento)
    setEmail(dados.email);
    setTelefone(dados.telefone);
    setLogradouro(dados.logradouro)
    setCep(dados.cep)
    setCidade(dados.cidade)
    setBairro(dados.bairro)
    setComplemento(dados.complemento)
    setNumero(dados.numero)
    setUf(dados.uf)
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    axios.get(`${BASE_URL2}/especialidades`).then((response) => {
      setDadosEspecialidade(response.data);
    });
  }, []);

  return (
    <div className='container'>
      <MenuLateral />
      <div className="conteudo-principal">
        <div className="cabeçalho-principal">

          <h1>Cadastro de Dentista</h1>
        </div>
        <div className="corpo-cadastro">
          <div className="container-cadastro">

            <h1>Novo Cadastro</h1>
            <div className='bloco12'>
              <h3>IDENTIFICAÇÃO</h3>
              <div className='identificacao'>
                <label htmlFor='inputNome'>Nome:
                  <input
                    type="text"
                    name='inputNome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </label>
                <label htmlFor="cro">CRO:
                  <input
                    type="number"
                    className="cro"
                    name="cro"
                    value={cro}
                    required
                    onChange={(e) => setCro(e.target.value)}
                  />
                </label>
                <label htmlFor="innputDt-nascimento">Dt. Nasc:
                  <input
                    type="date"
                    className='inputDt-nascimento'
                    name='dt-nascimento'
                    required
                    onChange={(e) => setDataDeNascimento(e.target.value)}
                  />
                </label>
              </div>
              <div className='identificacao'>
              <label htmlFor="inputRg">RG:
                  <input
                    type="number"
                    name='rg'
                    className='inputRg'
                    value={rg}
                    required
                    onChange={(e) => setRg(e.target.value)}
                  />
                </label>
                <label htmlFor="inputCpf">CPF:
                  <input
                    type="number"
                    name='cpf'
                    value={cpf}
                    className='inputCpf'
                    required
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </label>
                <label htmlFor='inputEspecialidade'>Especialidade:
                  <select
                    name="especialidades"
                    id="especialidades"
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
              </div>
              <h3>ENDEREÇO</h3>
              <div className='endereco'>
                <label htmlFor="inputCep">CEP:
                  <input
                    type="number"
                    name='cep'
                    className='inputCep'
                    value={cep}
                    required
                    onChange={(e) => setCep(e.target.value)}
                  />
                </label>
                <label htmlFor="inputUf">UF:
                  <input
                    type="text"
                    name='uf'
                    className='inputUf'
                    value={uf}
                    required
                    onChange={(e) => setUf(e.target.value)}
                  />
                </label>
                <label htmlFor="inputCidade">Cidade:
                  <input
                    type="text"
                    name='cidade'
                    className='inputCidade'
                    value={cidade}
                    required
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </label>
                <label htmlFor="inputLogradouro">Logradouro:
                  <input
                    type="text"
                    name='logradouro'
                    className='inputLogradouro'
                    value={logradouro}
                    required
                    onChange={(e) => setLogradouro(e.target.value)}
                  />
                </label>
              </div>
              <div className='endereco'>
                  <label htmlFor="inputNumero">Numero:
                    <input
                      type="text"
                      name='numero'
                      className='inputNumero'
                      value={numero}
                      required
                      onChange={(e) => setNumero(e.target.value)}
                    />
                  </label>
                  <label htmlFor="inputBairro">Bairro:
                    <input
                      type="text"
                      name='bairro'
                      className='inputBairro'
                      value={bairro}
                      required
                      onChange={(e) => setBairro(e.target.value)}
                    />
                  </label>
                  <label htmlFor="inputComplemento">Complemento:
                    <input
                      type="text"
                      name='complemento'
                      className='inputComplemento'
                      value={complemento}
                      required
                      onChange={(e) => setComplemento(e.target.value)}
                    />
                  </label>
                </div>
            </div>
            <div className='bloco34'>
              <h3>CONTATO</h3>
              <div className='contato'>
                <label htmlFor="inputEmail">E-mail:
                  <input
                    type="text"
                    required className='inputEmail'
                    value={email}
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="inputTelefone">Telefone:
                  <input
                    type="text"
                    value={telefone}
                    className='inputTelefone'
                    name='telefone'
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </label>
              </div>
              <div className='botoes'>
                <BotãoSalvar funct={salvar} pagina={'dentista'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroDentista