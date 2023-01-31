import axios from "axios";
import React, {useState, useEffect} from "react";
import BotãoSalvar from "../../componentes/BotãoSalvar";
import './Agendamento.css'
import { BASE_URL2 } from '../../config/axios';

const Agendamento= ({trigger, infos, setBotaoFalse}) => {

    const [dadosDentista, setDadosDentista] = useState([]);
    const [dadosPaciente, setDadosPaciente] = useState([]);

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
                        <input type="date" />
                        <label for="data">Horário: </label>  
                        <input type="time" value={infos[2]}/>
                    </div>
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Nome do Paciente: </label>  
                        <select name="pacientes" id="pacientes">
                        {dadosPaciente.map(({id, nome}) => (
                            <option key={id} value={nome}>{nome}</option>
                        ))}
                        </select>
                    </div>
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Nome do Dentista: </label>  
                        <select name="dentistas" id="dentistas">
                        {dadosDentista.map(({id, nome}) => (
                            <option key={id} value={nome}>{nome}</option>
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