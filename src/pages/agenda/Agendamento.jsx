import axios from "axios";
import React, {useState, useEffect} from "react";
import BotãoSalvar from "../../componentes/BotãoSalvar";
import './Agendamento.css'
import { BASE_URL2 } from '../../config/axios';

const Agendamento= ({trigger, infos, setBotaoFalse}) => {

    const [dadosDentista, setDadosDentista] = useState([]);
    const [dadosPaciente, setDadosPaciente] = useState([]);

    const [data, setData] = useState(new Date());
    const [horaInicial, setHoraInicial] = useState('');
    const [horaFinal, setHoraFinal] = useState('');
    const [pacienteId, setPacienteId] = useState(1);
    const [dentistaId, setDentistaId] = useState('');

    useEffect(() => {
        axios.get(`${BASE_URL2}/pacientes`).then((response) => {
            setDadosPaciente(response.data);
        });
        axios.get(`${BASE_URL2}/dentistas`).then((response) => {
            setDadosDentista(response.data);
          });
      }, []);

    return(trigger) ? (
         <div className='container-consulta'>
            <div className="corpo-consulta">
                <div className="corpo-consulta-titulo">Agendamento</div>
                <div className="corpo-consulta-conteudo">
                    <div className="corpo-consulta-linha">
                        <label for="data">Data: </label>  
                        <input 
                            type="date" 
                            onChange={(e) => setData(e.target.value)}
                            />
                        <label for="data">Horário: </label>  
                        <input 
                            type="time" 
                            value={infos[2]}
                            onChange={(e) => setHoraInicial(e.target.value)}
                            />
                    </div>
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Nome do Paciente: </label>  
                        <select 
                            name="pacientes" 
                            id="pacientes"
                            onChange={(e) => setPacienteId(e.target.value)}
                            >
                        {dadosPaciente.map(({id, nome}) => (
                            <option key={id} value={id}>{nome}</option>
                        ))}
                        </select>
                    </div>
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Nome do Dentista: </label>  
                        <select 
                            name="dentistas" 
                            id="dentistas"
                            onChange={(e) => setDentistaId(e.target.value)}
                            >
                        {dadosDentista.map(({id, nome}) => (
                            <option key={id} value={id}>{nome}</option>
                        ))}
                        </select>
                    </div>
                    <div className="corpo-consulta-linha">
                        <label for="data">Telefone: </label>  
                        <input type="number" />
                        <label for="data">E-mail: </label>  
                        <input type="email" />
                    </div>
                    <div className="corpo-consulta-linha-botoes">
                        <BotãoSalvar setBotaoFalse = {setBotaoFalse} />
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}

export default Agendamento