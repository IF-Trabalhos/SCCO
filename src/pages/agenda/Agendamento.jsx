import axios from "axios";
import React, {useState, useEffect} from "react";
import BotãoSalvar from "../../componentes/BotãoSalvar";
import './Agendamento.css'
import { BASE_URL2 } from '../../config/axios';

const Agendamento= ({trigger, setBotaoFalse, consultaId}) => {
    console.log(consultaId)

    const [dados, setDados] = useState([]);
    const [dadosDentista, setDadosDentista] = useState([]);
    const [dadosPaciente, setDadosPaciente] = useState([]);
    const [dadosProcedimento, setDadosProcedimento] = useState([]);

    const [id, setId] = useState('');
    const [data, setData] = useState(new Date());
    const [horaInicial, setHoraInicial] = useState();
    const [horaFinal, setHoraFinal] = useState();
    const [pacienteId, setPacienteId] = useState(1);
    const [dentistaId, setDentistaId] = useState(1);
    const [procedimentoId, setProcedimentoId] = useState(1);

    async function salvar() {
        setHoraInicial(Date.now())
        setHoraFinal(Date.now())
        let data_ = {data, horaInicial, horaFinal, pacienteId, dentistaId, procedimentoId};
        data_ = JSON.stringify(data_);
        if (consultaId == null) {
          await axios
            .post(`${BASE_URL2}/consultas`, data_, {
              headers: { 'Content-Type': 'application/json' },
            })
            .then(function (response) {
              setBotaoFalse(false);
            })
            .catch(function (error) {
              setBotaoFalse(false);
              console.log(error.response.data);
            });
        } else {
          await axios
            .put(`${BASE_URL2}/consultas/${consultaId}`, data_, {
              headers: { 'Content-Type': 'application/json' },
            })
            .then(function (response) {
                setBotaoFalse(false);
            })
            .catch(function (error) {
              setBotaoFalse(false);
              console.log(error.response.data);
            });
        }
      }

    async function buscar() {
        await axios.get(`${BASE_URL2}/consultas/${consultaId}`).then((response) => {
          setDados(response.data);
        });
        setId(dados.id);
        setData(dados.data)
        setHoraInicial(dados.horaInicial);
        setHoraFinal(dados.horaFinal);
        setPacienteId(dados.pacienteId);
        setDentistaId(dados.dentistaId);
        setProcedimentoId(dados.procedimentoId)
      }
    
      useEffect(() => {
        buscar(); // eslint-disable-next-line
      }, [id]);

    useEffect(() => {
        axios.get(`${BASE_URL2}/pacientes`).then((response) => {
            setDadosPaciente(response.data);
        });
        axios.get(`${BASE_URL2}/dentistas`).then((response) => {
            setDadosDentista(response.data);
          });
        axios.get(`${BASE_URL2}/procedimentos`).then((response) => {
            setDadosProcedimento(response.data);
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
                    </div>
                    <div className="corpo-consulta-linha">
                        <label for="data">Horário Inicial: </label>  
                            <input 
                                type="time" 
                                onChange={(e) => setHoraInicial(e.target.value)}
                                />
                        <label for="data">Horário Final: </label>  
                            <input 
                                type="time" 
                                onChange={(e) => setHoraFinal(e.target.value)}
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
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Procedimento: </label>  
                        <select 
                            name="procedimentos" 
                            id="procedimentos"
                            onChange={(e) => setProcedimentoId(e.target.value)}
                            >
                        {dadosProcedimento.map(({id, nome}) => (
                            <option key={id} value={id}>{nome}</option>
                        ))}
                        </select>
                    </div>
                    <div className="corpo-consulta-linha-botoes">
                        <BotãoSalvar funct={salvar} />
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}

export default Agendamento