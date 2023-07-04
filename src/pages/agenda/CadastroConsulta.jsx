import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BotãoSalvar from '../../componentes/BotãoSalvar';
import { BASE_URL } from '../../config/axios';
import MenuLateral from '../../componentes/MenuLateral'
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import './Agendamento.css'

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

  const minDate = new Date().toLocaleDateString('en-CA'); // Obtém a data atual no formato 'YYYY-MM-DD'

  async function salvar() {
    let data_ = { data, horaInicial, horaFinal, pacienteId, dentistaId, procedimentoId };
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
    <div className='container'>
      <MenuLateral />
      <div className='conteudo-principal'>
        <div className="cabeçalho-principal">
          <h1>Cadastro de Consulta</h1>
        </div>
        <div className='corpo-cadastro'>
          <div className='container-cadastro'>
            <h2>Novo Cadastro</h2>
            <div className="corpo-consulta-conteudo">
              <div className="corpo-consulta-linha">
                <label htmlFor="data">Data:
                <br/>
                  <input
                    type="date"
                    value={data}
                    min={minDate}
                    onChange={(e) => setData(e.target.value)}
                  />
                </label>
              </div>
              <div className="corpo-consulta-linha">
                <label htmlFor="horaInicial">Horário Inicial:
                <br/>
                  <input
                    type="time"
                    id="hora" 
                    name="hora"
                    min="06:00" 
                    max="22:00" 
                    step="1800"
                    value={horaInicial}
                    onChange={(e) => setHoraInicial(e.target.value + ":00")}
                  />
                </label>

                <label htmlFor="horaFinal">Horário Final:
                <br/>
                  <input
                    type="time"
                    id="hora" 
                    name="hora"
                    min="06:00" 
                    max="22:00" 
                    step="1800"
                    value={horaFinal}
                    onChange={(e) => setHoraFinal(e.target.value + ":00")}
                  />
                </label>
              </div>
              <div className="corpo-consulta-linha-nome">
                <label htmlFor="pacientes">Nome do Paciente:
                <br/>
                  <select
                    name="pacientes"
                    id="pacientes"
                    onChange={(e) => setPacienteId(e.target.value)}
                  >
                    {dadosPaciente.map(({ id, nome }) => (
                      <option
                        key={id}
                        value={id}
                        selected={pacienteId === id ? 'selected' : ''}
                      >
                        {nome}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="corpo-consulta-linha-nome">
                <label htmlFor="dentistas">Nome do Dentista:
                <br/>
                  <select
                    name="dentistas"
                    id="dentistas"
                    onChange={(e) => setDentistaId(e.target.value)}
                  >
                    {dadosDentista.map(({ id, nome }) => (
                      <option
                        key={id}
                        value={id}
                        selected={dentistaId === id ? 'selected' : ''}
                      >
                        {nome}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="corpo-consulta-linha-nome">
                <label htmlFor="procedimentos">Procedimento:
                <br/>
                  <select
                    name="procedimentos"
                    id="procedimentos"
                    onChange={(e) => setProcedimentoId(e.target.value)}
                  >
                    {dadosProcedimento.map(({ id, nome }) => (
                      <option
                        key={id}
                        value={id}
                        selected={procedimentoId === id ? 'selected' : ''}
                      >
                        {nome}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className='botaoagenda'>
                <BotãoSalvar funct={salvar} pagina={'agenda'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroConsulta