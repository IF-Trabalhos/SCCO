import React, {useState} from "react";
import TelaInicialAgenda from "../../componentes/TelaInicialAgenda";
import './Agenda.css'
import Agendamento from "./Agendamento";
import Calendar from 'moedim';

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
    const [data, setData] = useState(new Date())
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                   "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dia = data.getDate() + " de " + meses[data.getMonth()]

    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal'>
                <h1>Agenda</h1>
            </div>
            <div className='corpo-agenda'>
                <TelaInicialAgenda nomes={consultas} dentista={agenda} data_atual={dia} setBotaoTrue={setBotaoPopup}
                setConsultaValue={setAgendamentoInfo} />
                <div className="container-lateral-agenda">
                    <div className="calendario">
                        <Calendar locale="pt-BR" value={data} onChange={(d) => setData(d)} />
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