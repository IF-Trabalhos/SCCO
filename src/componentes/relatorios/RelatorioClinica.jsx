import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import BotãoSalvar from '../BotãoSalvar'
import './Relatorios.css'
import { BASE_URL2 } from '../../config/axios'
import MenuLateral from '../MenuLateral';

const RelatorioClinica = () => {
    const { handle } = useParams()

    const formatData = (data_input) => {
        const data = new Date(data_input)

        let dia = String(data.getUTCDate()).padStart(2, "0");
        let mes = String(data.getUTCMonth() + 1).padStart(2, "0");
        let ano = data.getFullYear();
        
        let data_formatada = dia + "/" + mes + "/" + ano;
        return data_formatada;
    }

    const datas = handle.split(",");
    const data_inicial = formatData(datas[0])
    const data_final = formatData(datas[1])

    const [qtdConsulta, setQtdConsultas] = useState('');    
    const [qtdPacientes, setQtdPacientes] = useState('');
    const [valorTotal, setValorTotal] = useState('');

    async function buscarDados() {
        console.log("Essa:", data_inicial)
        await axios.get(`${BASE_URL2}/consultas/valor/${datas[0]}/${datas[1]}`).then((response) => {
          setValorTotal(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade/${datas[0]}/${datas[1]}`).then((response) => {
            setQtdConsultas(response.data)
          });
        await axios.get(`${BASE_URL2}/consultas/paciente/quantidade/${datas[0]}/${datas[1]}`).then((response) => {
            setQtdPacientes(response.data)
        });
    }

    useEffect(() => {
        buscarDados(); // eslint-disable-next-line
    }, []);

    return (
        <div className='container'>
            <MenuLateral />
            <div className='conteudo-principal'>
                <div className='cabeçalho-principal'>
                    <h1>Relatório</h1>
                </div>
                <div className='container-principal-central'>
                    <div className='formatador-relatorio'>
                        <div>
                            <h3 className='periodo-relatorio'>De: {data_inicial} Até: {data_final}</h3>
                        </div>
                        <div className='informacoes-completa'>
                            <div className='informacoes'>
                                Consultas realizadas: {qtdConsulta}
                            </div>
                            <div className='informacoes'>
                                Procedimentos realizados: {qtdConsulta}
                            </div>
                            <div className='informacoes'>
                                Pacientes atendidos: {qtdPacientes}
                            </div>
                            <div className='informacoes'>
                                Valor total: {valorTotal}
                            </div>
                        </div>
                        <div className='botoes'>
                                <BotãoSalvar pagina={'relatorio/clinica'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatorioClinica