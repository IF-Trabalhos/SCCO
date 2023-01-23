import React, {useState} from "react";
import TelaInicialAgenda from "../componentes/TelaInicialAgenda";
import './Agenda.css'
import Agendamento from "./Agendamento";

const Agenda= ({consultas}) => {
    const dentistas =[
        {
            id: "1",
            nome: "Giuliano de Souza Leite",
        },
        {
            id: "2",
            nome: "Fernando Souza Pimenta",
        },
        {
            id: "3",
            nome: "Igor Rosa Pinto",
        },
    ]

    const [agenda, setAgenda] = useState("Giuliano de Souza Leite");
    const [botaoPopup, setBotaoPopup] = useState(false);
    const [agendamentoInfo, setAgendamentoInfo] = useState([{nome: "", dentista: ""}]);

    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal'>
                <h1>Agenda</h1>
            </div>
            <div className='corpo-agenda'>
                <TelaInicialAgenda nomes={consultas} dentista={agenda} data_atual={"6 de Janeiro"} setBotaoTrue={setBotaoPopup}
                setConsultaValue={setAgendamentoInfo} />
                <div className="container-lateral-agenda">
                    <div className="calendario">
                    </div>
                    <div className="agenda-config">
                        <div className="agenda-config-cabeçalho">
                            <h1>Agendas</h1>
                        </div>
                        <div className="agenda-config-conteudo">
                            {dentistas.map(({id, nome}) => (
                                <div key={id}
                                onClick={() => {
                                    setAgenda(nome)
                                }} 
                                >{nome}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Agendamento trigger={botaoPopup} setBotaoFalse={setBotaoPopup} infos={agendamentoInfo} />
        </div>
    )
}

export default Agenda