import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import './CadastroRecepcionista.css'
import { BASE_URL2 } from '../../config/axios';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import MenuLateral from '../../componentes/MenuLateral';
import { formatarCPF, formatarCEP, formatarTelefone, formataNumero, formataUf } from '../../data/utils';

const CadastroDentista = () => {
  const { handle } = useParams()
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [pis, setPis] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
  const [rg, setRg] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');

  const [dados, setDados] = useState([]);

  async function salvar() {
    let data = {
      nome, pis, dataDeNascimento, cpf, email, telefone,
      rg, logradouro, bairro, uf, cidade, complemento, cep, numero
    };
    data = JSON.stringify(data);
    if (handle == null) {
      await axios
        .post(`${BASE_URL2}/secretarias`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Secretaria ${nome} cadastrada com sucesso!`)
          navigate(`/recepcionista`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${BASE_URL2}/secretarias/${handle}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Secretaria ${nome} atualizada com sucesso!`)
          navigate(`/recepcionista`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${BASE_URL2}/secretarias/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setPis(dados.pis)
    setRg(dados.rg);
    setNome(dados.nome);
    setCpf(dados.cpf);
    setEmail(dados.email);
    setTelefone(dados.telefone);
    setDataDeNascimento(dados.dataDeNascimento)
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

  return (
    <div className='container'>
      <MenuLateral />
      <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Cadastro de Recepcionista</h1>
        </div>
        <div className='corpo-cadastro'>
          <div className='container-cadastro'>
            <div className='bloco12'>
              <h3>IDENTIFICAÇÃO</h3>
              <div className='identificacao'>
                <label htmlFor='inputNome' className='required'>Nome:
                <br/>
                  <input
                    type="text"
                    name='inputNome'
                    value={nome}
                    required
                    maxLength={255}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </label>
                <label htmlFor="numPIS" className='required'>N. PIS:
                <br/>
                  <input
                    type="text"
                    className="numPIS"
                    name="numPIS"
                    value={pis}
                    required
                    maxLength={11}
                    onChange={(e) => setPis(formataNumero(e.target.value))}
                  />
                </label>
                <label htmlFor="innputDt-nascimento" className='required'>Dt.Nasc:
                <br/>
                  <input
                    type="date"
                    className='inputDt-nascimento'
                    name='dt-nascimento'
                    value={dataDeNascimento}
                    requiredS
                    onChange={(e) => setDataDeNascimento(e.target.value)}
                  />
                </label>
              </div>
              <div className='identificacao'>
                <label htmlFor="inputRg" className='required'>RG:
                <br/>
                  <input
                    type="text"
                    name='rg'
                    className='inputRg'
                    value={rg}
                    required
                    maxLength={10}
                    onChange={(e) => setRg(formataNumero(e.target.value))}
                  />
                </label>
                <label htmlFor="inputCpf" className='required'>CPF:
                <br/>
                  <input
                    type="text"
                    name='cpf'
                    value={cpf}
                    className='inputCpf'
                    required
                    maxLength={14}
                    onChange={(e) => setCpf(formatarCPF(e.target.value))}
                  />
                </label>
              </div>
              <h3>ENDEREÇO</h3>
              <div className='endereco'>
                <label htmlFor="inputCep" className='required'>CEP:
                <br/>
                  <input
                    type="text"
                    name='cep'
                    className='inputCep'
                    value={cep}
                    required
                    maxLength={9}
                    onChange={(e) => setCep(formatarCEP(e.target.value))}
                  />
                </label>
                <label htmlFor="inputUf" className='required'>UF:
                <br/>
                  <input
                    type="text"
                    name='uf'
                    className='inputUf'
                    value={uf}
                    required
                    maxLength={2}
                    onChange={(e) => setUf(formataUf(e.target.value))}
                  />
                </label>
                <label htmlFor="inputCidade" className='required'>Cidade:
                <br/>
                  <input
                    type="text"
                    name='cidade'
                    className='inputCidade'
                    value={cidade}
                    required
                    maxLength={255}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </label>
              </div>
              <div className='endereco'>
                <label htmlFor="inputLogradouro" className='required'>Logradouro:
                <br/>
                  <input
                    type="text"
                    name='logradouro'
                    className='inputLogradouro'
                    value={logradouro}
                    required
                    maxLength={255}
                    onChange={(e) => setLogradouro(e.target.value)}
                  />
                </label>
                <label htmlFor="inputNumero" className='required'>Numero:
                <br/>
                  <input
                    type="text"
                    name='numero'
                    className='inputNumero'
                    value={numero}
                    required
                    maxLength={255}
                    onChange={(e) => setNumero(formataNumero(e.target.value))}
                  />
                </label>
                <label htmlFor="inputBairro" className='required'> Bairro:
                <br/>
                  <input
                    type="text"
                    name='bairro'
                    className='inputBairro'
                    value={bairro}
                    required
                    maxLength={255}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </label>
                <label htmlFor="inputComplemento">Complemento:
                <br/>
                  <input
                    type="text"
                    name='complemento'
                    className='inputComplemento'
                    value={complemento}
                    required
                    maxLength={255}
                    onChange={(e) => setComplemento(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className='bloco34'>
              <h3>CONTATO</h3>
              <div className='contato'>
                <label htmlFor="inputEmail">E-mail:
                <br/>
                  <input
                    type="text"
                    required
                    className='inputEmail'
                    value={email}
                    name='email'
                    maxLength={255}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="inputTelefone" className='required'>Telefone:
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
              <BotãoSalvar funct={salvar} pagina={'recepcionista'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroDentista