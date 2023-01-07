import React, {useState} from "react";
import TelaInicialAgenda from "../componentes/TelaInicialAgenda";
import './Agenda.css'
import Agendamento from "./Agendamento";

const Agenda= () => {
    const consultas1 =[
        {
            nome: "Paciente 1",
            hora_inicial: "08:00",    
            hora_final: "09:00"   
        },
        {
            nome: "",
            hora_inicial: "09:00",    
            hora_final: "10:00"     
        },
        {
            nome: "",
            hora_inicial: "10:00",    
            hora_final: "11:00"           
        },
        {
            nome: "Paciente 4",
            hora_inicial: "11:00",    
            hora_final: "12:00"   
        },
    ]

    const consultas2 =[
        {
            nome: "Paciente 1",
            hora_inicial: "08:00",    
            hora_final: "09:00"   
        },
        {
            nome: "Paciente 2",
            hora_inicial: "09:00",    
            hora_final: "10:00"     
        },
        {
            nome: "Paciente 3",
            hora_inicial: "10:00",    
            hora_final: "11:00"           
        },
        {
            nome: "Paciente 4",
            hora_inicial: "11:00",    
            hora_final: "12:00"   
        },
        {
            nome: "Paciente 5",
            hora_inicial: "12:00",    
            hora_final: "13:00"   
        },
    ]

    const dentistas =[
        {
            nome: "Dentista 1",
            consultas: consultas1
        },
        {
            nome: "Dentista 2",
            consultas: consultas2
        },
        {
            nome: "Dentista 3",
            consultas: consultas1
        },
        {
            nome: "Dentista 4",           
            consultas: consultas2
        },
    ]

    const [agenda, setAgenda] = useState("Dentista 1");
    const [consultas, setConsultas] = useState(consultas1);
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
                            {dentistas.map(({nome, consultas}) => (
                                <div
                                onClick={() => {
                                    setAgenda(nome)
                                    setConsultas(consultas)
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