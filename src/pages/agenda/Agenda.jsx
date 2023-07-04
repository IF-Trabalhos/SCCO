import axios from "axios";
import React, {useState, useEffect} from "react";
import TelaInicialAgenda from "../../componentes/TelaInicialAgenda";
import './Agenda.css'
import Calendar from 'moedim';
import MenuLateral from '../../componentes/MenuLateral'
import { BASE_URL, BASE_URL2 } from '../../config/axios';

const Agenda= () => {

    const [agenda, setAgenda] = useState(""); // Nome do dentista da agenda
    const [data, setData] = useState(new Date()) // data do calendário
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                   "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dia = data.getDate() + " de " + meses[data.getMonth()]

    const [dados, setDados] = useState([]); // Todas as consultas
    const [dadosDentista, setDadosDentista] = useState([]); // Todos os dentistas


    useEffect(() => {
        axios.get(`${BASE_URL}/consultas`).then((response) => {
          setDados(response.data);
        });
        axios.get(`${BASE_URL2}/dentistas/ativos`).then((response) => {
            setDadosDentista(response.data);
            setAgenda(response.data[0].nome)
          });
      }, []);


    return(
        <div className="container">
            <MenuLateral />
            <div className="conteudo-principal">
                <div className='cabeçalho-principal'>
                    <h1>Agenda</h1>
                </div>
                <div className='corpo-agenda'>
                    <TelaInicialAgenda nomes={dados} setDados={setDados} dentista={agenda} data_atual={dia} />
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
                                    <div 
                                        key={id}
                                        onClick={() => {
                                        setAgenda(nome)
                                    }} 
                                    >{nome}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda