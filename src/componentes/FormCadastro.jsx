import React from 'react'

const FormCadastro = ({labelDinamica}) => {
  console.log(labelDinamica)
  return (
    <div className='container'>
      <div className='row-identificacao'>
        <h3>IDENTIFICAÇÃO</h3>
      </div>
      <div className='row'>
        <div className='collum'>
          <label htmlFor='inputNome'>Nome:</label>
          <input type="text" name='inputNome' required />
        </div>
        <div className='collum'>
          <label htmlFor={labelDinamica}>{labelDinamica}:</label>
          <input type="number" name={labelDinamica} required/>
        </div>
      </div>
        <div className='row'>
          <div className='collumn'>
            <label htmlFor="innputDt-nascimento">Dt. Nascimento:</label>
            <input type="date" name='inputDt-nascimento' required/>
          </div>
          <div className='collumn'>
            <label htmlFor="inputRg">RG:</label>
            <input type="number" name='inputRg' required/>
          </div>
          <div className='collumn'>
            <label htmlFor="inputCpf">CPF:</label>
            <input type="number" name='inputCpf' required/>
          </div>
        </div>
        <div className='row-endereco'><h3>ENDEREÇO</h3></div>
        <div className='row'>
          <div className='collumn'>
            <label htmlFor="inputCep">CEP:</label>
            <input type="number" name='inputCep' required/>
          </div>
          <div className='collumn'>
            <label htmlFor="inputUf">UF:</label>
            <input type="text" name='inputUf' required/>
          </div>
          <div className='collumn'>
            <label htmlFor="inputCidade">Cidade:</label>
            <input type="text" name='inputCidade' required/>
          </div>
        </div>
        <div className='row'>
          <div className='colllumn'>
            <label htmlFor="inputLogradouro">Logradouro:</label>
            <input type="text" name='inputLogradouro' required/>
          </div>
          <div className='collumn'>
            <label htmlFor="inputNumero">Numero:</label>
            <input type="text" name='inputNumero' required/>
          </div>
        </div>
        <div className='row'>
          <div className='collumn'>
            <label htmlFor="inputBairro">Bairro:</label>
            <input type="text" name='inputBairro' required/>
          </div>
          <div className='collumn'>
            <label htmlFor="inputComplemento">Complemento:</label>
            <input type="text" name='inputComplemento' />
          </div>
        </div>
        <div className='row-endereco'>
          <h3>CONTATO</h3>
        </div>
        <div className='row'>
          <div className="collumn">
            <label htmlFor="inputEmail">E-mail:</label>
            <input type="text" required name='inputEmail'/>
          </div>
          <div className='collum'>
            <label htmlFor="inputCelular">Celular:</label>
            <input type="text" required name='inputCelular'/>
            
          </div>
        </div>
        <div className='row'>
          <div className='collumn'>
            <label htmlFor="inputTelefone">Telefone:</label>
            <input type="text" required name='inputTelefone'/>
          </div>
        </div>
    </div>
  )
}

export default FormCadastro
