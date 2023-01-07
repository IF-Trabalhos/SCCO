import React from "react";
import './TelaInicialAgenda.css'
import BarraDePesquisa from "./BarraDePesquisa";
import { Link } from "react-router-dom";

const TelaInicialAgenda = ({nomes, dentista, data_atual, setBotaoTrue, setConsultaValue}) => {
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
                {nomes.map(({nome, hora_inicial, hora_final}) => (
                    <div className="agenda-horarios-info" onClick={() => {
                        setBotaoTrue(true)
                        setConsultaValue([nome, dentista, hora_inicial])
                    }} >
                        <div className="agenda-horarios-info-hora">{hora_inicial} - {hora_final}</div>
                        <div className="agenda-horarios-info-nome">{nome} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TelaInicialAgenda