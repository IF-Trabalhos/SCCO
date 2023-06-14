import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import BotãoSalvar from '../BotãoSalvar'
import './Relatorios.css'
import { BASE_URL2 } from '../../config/axios'

const RelatorioClinica = () => {
    const getIntAleatorio = () => {
        return Math.floor(Math.random() * 100)
    }
    
    const [qtdConsulta, setQtdConsultas] = useState('');    
    const [qtdPacientes, setQtdPacientes] = useState('');
    const [valorTotal, setValorTotal] = useState('');

    async function buscarDados() {
        await axios.get(`${BASE_URL2}/consultas/valor`).then((response) => {
          setValorTotal(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade`).then((response) => {
            setQtdConsultas(response.data)
          });
        await axios.get(`${BASE_URL2}/consultas/paciente/quantidade`).then((response) => {
            setQtdPacientes(response.data)
        });
    }

    useEffect(() => {
        buscarDados(); // eslint-disable-next-line
    }, []);

    return (
        <div className='conteudo-principal'>
            <div className='cabeçalho-principal'>
                <h1>Relatório</h1>
            </div>
            <div className='container-principal-central'>
                <div className='formatador-relatorio'>
                    <div>
                        <label htmlFor="inputNomeRelatorio">
                            Nome Relatório:
                            <input type="text" required name='inputNome Relatorio' />
                        </label>
                        <h3 className='periodo-relatorio'>De: 09/04/2021 Até: 13/07/2022</h3>

                    </div>
                    <div className='informacoes-completa'>
                        <div className='informacoes'>
                            Consultas realizadas: {qtdConsulta}
                        </div>
                        <div className='informacoes'>
                            Procedimentos realizados: {getIntAleatorio()}
                        </div>
                        <div className='informacoes'>
                            Pacientes atendidos: {qtdPacientes}
                        </div>
                        <div className='informacoes'>
                            Valor total: {valorTotal}
                        </div>
                    </div>
                    <div className='botoes'>
                            <BotãoSalvar/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RelatorioClinica
