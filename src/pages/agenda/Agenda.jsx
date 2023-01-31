import axios from "axios";
import React, {useState, useEffect} from "react";
import TelaInicialAgenda from "../../componentes/TelaInicialAgenda";
import './Agenda.css'
import Agendamento from "./Agendamento";
import Calendar from 'moedim';
import { BASE_URL, BASE_URL2 } from '../../config/axios';

const Agenda= ({}) => {

    const [agenda, setAgenda] = useState("Giuliano de Souza Leite");
    const [botaoPopup, setBotaoPopup] = useState(false);
    const [agendamentoInfo, setAgendamentoInfo] = useState([{nome: "", dentista: ""}]);
    const [data, setData] = useState(new Date())
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                   "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dia = data.getDate() + " de " + meses[data.getMonth()]

    const [dados, setDados] = useState([]);
    const [dadosDentista, setDadosDentista] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/consultas`).then((response) => {
          setDados(response.data);
        });
        axios.get(`${BASE_URL2}/dentistas`).then((response) => {
            setDadosDentista(response.data);
          });
      }, []);

    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal'>
                <h1>Agenda</h1>
            </div>
            <div className='corpo-agenda'>
                <TelaInicialAgenda nomes={dados} dentista={agenda} data_atual={dia} setBotaoTrue={setBotaoPopup}
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
                            {dadosDentista.map(({id, nome}) => (
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