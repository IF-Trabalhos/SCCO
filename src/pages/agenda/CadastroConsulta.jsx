import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';

const CadastroConsulta = () => {

  const { handle } = useParams()
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [data, setData] = useState(new Date());
  const [horaInicial, setHoraInicial] = useState();
  const [horaFinal, setHoraFinal] = useState();
  const [pacienteId, setPacienteId] = useState(1);
  const [dentistaId, setDentistaId] = useState(1);
  const [procedimentoId, setProcedimentoId] = useState(1);

  const [dados, setDados] = useState([]);
  const [dadosDentista, setDadosDentista] = useState([]);
  const [dadosPaciente, setDadosPaciente] = useState([]);
  const [dadosProcedimento, setDadosProcedimento] = useState([]);

  async function salvar() {
    console.log(horaInicial)
    let data_ = {data, horaInicial, horaFinal, pacienteId, dentistaId, procedimentoId};
    data_ = JSON.stringify(data_);
    if (handle == null) {
      await axios
        .post(`${BASE_URL}/consultas`, data_, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
            mensagemSucesso(`Consulta cadastrada com sucesso!`)
            navigate(`/agenda`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${BASE_URL}/consultas/${handle}`, data_, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
            mensagemSucesso(`Consulta atualizada com sucesso!`)
            navigate(`/agenda`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${BASE_URL}/consultas/${handle}`).then((response) => {
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
    axios.get(`${BASE_URL}/pacientes`).then((response) => {
        setDadosPaciente(response.data);
    });
    axios.get(`${BASE_URL}/dentistas`).then((response) => {
        setDadosDentista(response.data);
      });
    axios.get(`${BASE_URL}/procedimentos`).then((response) => {
        setDadosProcedimento(response.data);
    });
  }, []);

  return (
    <div className='conteudo-principal'>
      <div className="cabeçalho-principal">
        <h1>Cadastro de Consulta</h1>
      </div>
      <div className='corpo-cadastro'>
        <div className='container-cadastro'>
          <h2>Novo Cadastro</h2>
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
                                onChange={(e) => setHoraInicial(e.target.value + ":00")}
                            />
                        <label for="data">Horário Final: </label>  
                            <input 
                                type="time" 
                                onChange={(e) => setHoraFinal(e.target.value + ":00")}
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
                            <option 
                              key={id} 
                              value={id}                              
                              selected={pacienteId === id ? 'selected' : ''}
                              >{nome}</option>
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
                            <option 
                              key={id} 
                              value={id}
                              selected={dentistaId === id ? 'selected' : ''}
                            >{nome}</option>
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
                            <option 
                              key={id} 
                              value={id}
                              selected={procedimentoId === id ? 'selected' : ''}
                              >{nome}</option>
                        ))}
                    </select>
                </div>
                <div className="corpo-consulta-linha-botoes">
                    <BotãoSalvar funct={salvar} pagina={'agenda'}/>
                </div>
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default CadastroConsulta
