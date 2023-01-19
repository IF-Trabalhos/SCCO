import React from 'react'
import './FormCadastroPessoa.css'
const FormCadastroPessoa = ({ labelDinamica }) => {
  console.log(labelDinamica)
  return (
    <div className='container-cadastro'>


      <div className='bloco'>
        <h3>IDENTIFICAÇÃO</h3>

        <div>
          <label htmlFor='inputNome'>Nome:<input type="text" name='inputNome' required /></label>
        </div>
        <div>
          <label htmlFor={labelDinamica}>{labelDinamica}:<input type="number" className={labelDinamica} name={labelDinamica} required /></label>
        </div>
        <div>
          <label htmlFor="innputDt-nascimento">Dt. Nascimento:<input type="date" className='inputDt-nascimento' name='dt-nascimento' required /></label>

        </div>
        <div>
          <label htmlFor="inputRg">RG:<input type="number" name='rg' className='inputRg' required /></label>

        </div>
        <div>
          <label htmlFor="inputCpf">CPF:<input type="number" name='cpf' className='inputCpf' required /></label>

        </div>
      </div>
      <div className='endereco'>
        <h3>ENDEREÇO</h3>
      <div className='linha1-endereco'>
        
          <label htmlFor="inputCep">CEP:<input type="number" name='cep' className='inputCep' required /></label>

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
          <label htmlFor="inputEmail">E-mail:<input type="text" required className='inputEmail' name='email' /></label>

  
          <label htmlFor="inputCelular">Celular:<input type="text" className='inputCelular' required name='celular' /></label>

   
      
          <label htmlFor="inputTelefone">Telefone:<input type="text" className='inputTelefone' name='telefone' /></label>

        </div>
      </div>
    </div>
  )
}

export default FormCadastroPessoa