import React from "react";
import './TelaInicialAgenda.css'
import BarraDePesquisa from "./BarraDePesquisa";

const TelaInicialAgenda = ({nomes, dentista, data_atual, setBotaoTrue, setConsultaValue}) => {
    console.log(nomes)
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
                {nomes.map(({id, hr_inicial, hr_final, nome_paciente, nome_dentista}) => (
                    <div key={id} className="agenda-horarios-info" onClick={() => {
                        setBotaoTrue(true)
                        setConsultaValue([nome_paciente, nome_dentista, hr_inicial])
                    }} >
                        <div className="agenda-horarios-info-hora">{hr_inicial} - {hr_final}</div>
                        <div className="agenda-horarios-info-nome">{nome_paciente} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TelaInicialAgenda