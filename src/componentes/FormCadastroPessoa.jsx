import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../config/axios';
import BotãoSalvar from './BotãoSalvar';
import './FormCadastroPessoa.css'
const FormCadastroPessoa = ({ labelDinamica, dados, setDados, info}) => {

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rg, setRg] = useState('');
  const [cep, setCep] = useState('');

  async function salvar() {
    let data = { id, nome, cpf, rg, telefone, email};
    data = JSON.stringify(data);
    await axios
      .post(`${BASE_URL}/pessoas`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function(response) {
        let aux = dados;
        let nova_pessoa = {id: id, nome: nome, cpf: cpf, rg: rg, telefone: telefone, email: email};
        aux.push(nova_pessoa);
        setDados(aux)
        console.log("Sucesso")
      })
      .catch(function(error) {
        console.log("Erro")
      })
  }

  console.log(labelDinamica)
  return (
    <div className='container-cadastro'>


      <div className='bloco'>
        <h3>IDENTIFICAÇÃO</h3>

        <div>
          <label htmlFor='inputNome'>Nome:
            <input 
              type="text" 
              name='inputNome' 
              value={info[0].nome}
              required
              onChange={(e) => setNome(e.target.value)}
               />
          </label>
        </div>
        <div>
          <label htmlFor={labelDinamica}>{labelDinamica}:
            <input 
              type="number" 
              className={labelDinamica} 
              name={labelDinamica} 
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
              value={info[0].dat_nascimento}
              required />
          </label>

        </div>
        <div>
          <label htmlFor="inputRg">RG:
            <input 
              type="number" 
              name='rg' 
              className='inputRg' 
              value={info[0].rg}
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
              className='inputCpf' 
              required
              value={info[0].cpf}
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
              onChange={(e) => setCep(e.target.value)}
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
              name='email'
              value={info[0].email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>

          <label htmlFor="inputCelular">Celular:
            <input 
              type="text" 
              className='inputCelular' 
              required name='celular'
              onChange={(e) => setTelefone(e.target.value)}
              />
          </label>

          <label htmlFor="inputTelefone">Telefone:
            <input 
              type="text" 
              className='inputTelefone'
              value={info[0].telefone} 
              name='telefone' />
          </label>
        </div>
      </div>
      <BotãoSalvar/>
    </div>
  )
}

export default FormCadastroPessoa