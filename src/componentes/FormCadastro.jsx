import React from 'react'
import './FormCadastro.css'
const FormCadastro = ({ labelDinamica }) => {
  console.log(labelDinamica)
  return (
    <div className='container-cadastro'>


      <div className='bloco'>
        <h3>IDENTIFICAÇÃO</h3>

        <div>
          <label htmlFor='inputNome'>Nome:<input type="text" name='inputNome' required /></label>
        </div>
        <div>
          <label htmlFor={labelDinamica}>{labelDinamica}:<input type="number" name={labelDinamica} required /></label>
        </div>
        <div>
          <label htmlFor="innputDt-nascimento">Dt. Nascimento:<input type="date" name='inputDt-nascimento' required /></label>

        </div>
        <div>
          <label htmlFor="inputRg">RG:<input type="number" name='inputRg' required /></label>

        </div>
        <div>
          <label htmlFor="inputCpf">CPF:<input type="number" name='inputCpf' required /></label>

        </div>
      </div>
      <div className='endereco'>
        <h3>ENDEREÇO</h3>
      <div className='linha1-endereco'>
        
          <label htmlFor="inputCep">CEP:<input type="number" name='inputCep' className='cep' required /></label>

          <label htmlFor="inputUf">UF:<input type="text" name='inputUf' className='uf' required /></label>

     
          <label htmlFor="inputCidade">Cidade:<input type="text" name='inputCidade' className='cidade' required /></label>

      </div>
      <div className='linha2-endereco'>
          <label htmlFor="inputLogradouro">Logradouro:<input type="text" name='inputLogradouro'className='logradouro' required /></label>

      
    
          <label htmlFor="inputNumero">Numero:<input type="text" name='inputNumero' className='numero' required /></label>

      </div>
      <div className='linha3-endereco'>
          <label htmlFor="inputBairro">Bairro:<input type="text" name='inputBairro' className='bairro' required /></label>
          
        

        
          <label htmlFor="inputComplemento">Complemento:<input type="text" name='inputComplemento' className='complemento' required /></label>

     </div>   
    </div>
      <div className='contato'>
        <h3>CONTATO</h3>
        <div>       
          <label htmlFor="inputEmail">E-mail:<input type="text" required name='inputEmail' /></label>

  
          <label htmlFor="inputCelular">Celular:<input type="text" required name='inputCelular' /></label>

   
      
          <label htmlFor="inputTelefone">Telefone:<input type="text" required name='inputTelefone' /></label>

        </div>
      </div>
    </div>
  )
}

export default FormCadastro