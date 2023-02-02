import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import './CadastroPaciente.css'
import { BASE_URL2 } from '../../config/axios';

const CadastroPaciente = ({}) => {

  const {handle} = useParams() 

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rg, setRg] = useState('');

  const [dados, setDados] = useState([]);

  async function buscar() {
    await axios.get(`${BASE_URL2}/pacientes/${handle}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setRg(dados.rg);
    setNome(dados.nome);
    setCpf(dados.cpf);
    setEmail(dados.email);
    setTelefone(dados.telefone);
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  return (
    <div className='conteudo-principal'>
      <div className="cabeçalho-principal">
        <h1>Cadastro de Paciente</h1>
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
              <label htmlFor="numProntuario">N. Prontuário:
              <input 
                type="number" 
                className="numProntuario"
                name="numProntuario"
                required
                />
            </label>
            </div>
            <div>
              <label htmlFor="innputDt-nascimento">Dt. Nascimento:
                <input 
                  type="date" 
                  className='inputDt-nascimento' 
                  name='dt-nascimento' 
                  required />
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
          <div className='endereco'>
            <h3>ENDEREÇO</h3>
          <div className='linha1-endereco'>
            
              <label htmlFor="inputCep">CEP:
                <input 
                  type="number" 
                  name='cep' 
                  className='inputCep' 
                  required
                  />
              </label>
              <label htmlFor="inputUf">UF:<input type="text" name='uf' className='inputUf' required /></label>
              <label htmlFor="inputCidade">Cidade:<input type="text" name='cidade' className='inputCidade' required /></label>
          </div>
          <div className='linha2-endereco'>
              <label htmlFor="inputLogradouro">Logradouro:<input type="text" name='logradouro'className='inputLogradouro' required /></label>
              <label htmlFor="inputNumero">Numero:<input type="text" name='numero' className='inputNumero' required /></label>
          </div>
          <div className='linha3-endereco'>
              <label htmlFor="inputBairro">Bairro:<input type="text" name='bairro' className='inputBairro' required /></label>
              <label htmlFor="inputComplemento">Complemento:<input type="text" name='complemento' className='inputComplemento' required /></label>
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
          <BotãoSalvar pagina={'/paciente'}/>
        </div>
      </div>
    </div>
  )
}

export default CadastroPaciente