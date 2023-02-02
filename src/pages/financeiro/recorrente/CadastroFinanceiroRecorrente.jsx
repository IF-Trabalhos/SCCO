import axios from 'axios';
import React, { useState, useEffect } from 'react'
import BotãoSalvar from '../../../componentes/BotãoSalvar';
import { useParams } from 'react-router-dom';
import { BASE_URL2 } from '../../../config/axios';

const CadastroFinanceiroRecorrente = ({}) => {

    const {handle} = useParams() 

    const [id, setId] = useState('');
  
    const [dados, setDados] = useState([]);
  
    async function buscar() {
      await axios.get(`${BASE_URL2}/pacientes/${handle}`).then((response) => {
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
                    <label htmlFor="despesa">Despesa: 
                        <input type="text" name='despesa'
                        required
                        />
                    </label>
                    </div>
                    <div>
                    <label htmlFor="quantidade">Quantidade:
                        <input type="text" name='quantidade'
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
                <BotãoSalvar pagina={'/financeiro/recorrente'} />
            </div>
        </div>
    </div>
  )
}

export default CadastroFinanceiroRecorrente
