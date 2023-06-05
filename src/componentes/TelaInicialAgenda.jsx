import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './TelaInicialAgenda.css'
import BarraDePesquisa from "./BarraDePesquisa";
import { BASE_URL2 } from '../config/axios';

const TelaInicialAgenda = ({nomes, dentista, data_atual, setBotaoTrue, setConsultaId}) => {

    const [paciente, setPaciente] = useState('');

    async function buscarPaciente() {
        await axios.get(`${BASE_URL2}/pacientes/`).then((response) => {
          setPaciente(response.data)
        });
      }

    useEffect(() => {
        buscarPaciente(); // eslint-disable-next-line
    }, []);

    return(
        <div className='container-principal-agenda'>
            <div className="container-principal-agenda-cabeçalho">
                <p>{dentista}</p>
                <p>{data_atual}</p>
            </div>
            <div className="container-principal-agenda-conteudo">
                <div className="agenda-barra-de-pesquisa">
                    <BarraDePesquisa />
                </div>
                {nomes.map(({id, horaInicial, horaFinal, pacienteId}) => (
                    <div key={id} className="agenda-horarios-info" onClick={() => {
                        setBotaoTrue(true)
                        setConsultaId(id)
                    }} >
                        <div className="agenda-horarios-info-hora">{horaInicial} - {horaFinal}</div>
                        <div className="agenda-horarios-info-nome"> {paciente[pacienteId].nome} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TelaInicialAgenda