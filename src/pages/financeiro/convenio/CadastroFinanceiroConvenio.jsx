import axios from 'axios';
import React, { useState, useEffect } from 'react'
import BotãoSalvar from '../../../componentes/BotãoSalvar';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config/axios';

const CadastroFinanceiroConvenio = ({}) => {

    const {handle} = useParams() 

    const [id, setId] = useState('');
  
    const [dados, setDados] = useState([]);
  
    async function buscar() {
      await axios.get(`${BASE_URL}/pacientes/${handle}`).then((response) => {
        setDados(response.data);
      });
      setId(dados.id);
    }
  
    useEffect(() => {
      buscar(); // eslint-disable-next-line
    }, [id]);

  return (
    <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Procedimento</h1>
        </div>
        <div className='corpo-cadastro'>
        <div className='container-cadastro'>
            <div className='bloco'>
                <div>
                    <label htmlFor="paciente">Paciente:
                        <input type="text" name='paciente'
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
                <BotãoSalvar pagina={'/financeiro/convenio'} />
            </div>
        </div>
    </div>
  )
}

export default CadastroFinanceiroConvenio
