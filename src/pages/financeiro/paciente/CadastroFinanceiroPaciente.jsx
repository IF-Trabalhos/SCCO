import axios from 'axios';
import React, { useState, useEffect } from 'react'
import BotãoSalvar from '../../../componentes/BotãoSalvar';
import { useParams } from 'react-router-dom';
import { BASE_URL2 } from '../../../config/axios';

const CadastroFinanceiroPaciente = ({}) => {

    const {handle} = useParams() 

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
  
    const [dados, setDados] = useState([]);
  
    async function buscar() {
      await axios.get(`${BASE_URL2}/pacientes/${handle}`).then((response) => {
        setDados(response.data);
      });
      setId(dados.id);
      setNome(dados.nome);
    }
  
    useEffect(() => {
      buscar(); // eslint-disable-next-line
    }, [id]);

  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Cadastro de Fatura do Paciente</h1>
        </div>
        <div className='corpo-cadastro'>
        <div className='container-cadastro'>
            <div className='bloco'>
                <div>
                    <label htmlFor="paciente">Paciente:
                        <input 
                        type="text" 
                        name='paciente'
                        value={nome}
                        required
                        />
                    </label>
                    </div>
                    <div>
                    <label htmlFor="procedimento">Procedimentos: 
                        <input type="text" name='procedimento'
                        required
                        />
                    </label>
                    </div>
                    <div>
                    <label htmlFor="inputValor">
                        Valor Total:
                        <input type="number" />
                    </label>
                    </div>
                </div>
                <BotãoSalvar pagina={'/financeiro/paciente'} />
            </div>
        </div>
    </div>
  )
}

export default CadastroFinanceiroPaciente
