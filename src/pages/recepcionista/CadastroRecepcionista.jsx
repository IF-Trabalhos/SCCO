import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import './CadastroRecepcionista.css'
import { BASE_URL2 } from '../../config/axios';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import MenuLateral from '../../componentes/MenuLateral';

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
            <div className='bloco'>
              <h3>IDENTIFICAÇÃO</h3>
              <div>
                <label htmlFor='inputNome'>Nome:
                  <input 
                      type="text" 
                      name='inputNome' 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                </label>
              </div>
              <div>
                <label htmlFor="numPIS">N. PIS:
                <input 
                  type="number" 
                  className="numPIS"
                  name="numPIS"
                  value={pis}
                  required
                  onChange={(e) => setPis(e.target.value)}
                  />
              </label>
              </div>
              <div>
                <label htmlFor="innputDt-nascimento">Dt. Nascimento:
                  <input 
                    type="date" 
                    className='inputDt-nascimento' 
                    name='dt-nascimento' 
                    value={dataDeNascimento}
                    required
                    onChange={(e) => setDataDeNascimento(e.target.value)}
                    />
                </label>
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
            </div>
            <h3>ENDEREÇO</h3>
            <div className='endereco'>
            <div className='linha1-endereco'>
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
            </div>
            <div className='linha2-endereco'>
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
            </div>
            <div className='linha3-endereco'>
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
            <div className='contato'>
              <h3>CONTATO</h3>
              <div>       
                <label htmlFor="inputEmail">E-mail:
                  <input 
                    type="text" 
                    required className='inputEmail' 
                    value={email}
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="inputCelular">Celular:
                  <input 
                    type="text" 
                    className='inputCelular' 
                    required name='celular'
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
            </div>
            <BotãoSalvar funct={salvar} pagina={'recepcionista'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroDentista