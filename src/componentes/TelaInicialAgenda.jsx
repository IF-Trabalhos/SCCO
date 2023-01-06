import React from "react";
import './TelaInicialAgenda.css'
import BarraDePesquisa from "./BarraDePesquisa";

const TelaInicialAgenda = ({nomes, dentista, data_atual}) => {
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
                    <div className="agenda-horarios-info">
                        <div className="agenda-horarios-info-hora">{hora_inicial} - {hora_final}</div>
                        <div className="agenda-horarios-info-nome">{nome} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TelaInicialAgenda