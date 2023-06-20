import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './TelaInicialAgenda.css'
import BarraDePesquisa from "./BarraDePesquisa";
import { BASE_URL2 } from '../config/axios';
import { mensagemSucesso, mensagemErro } from '../componentes/toastr';

const TelaInicialAgenda = ({ nomes, setDados, dentista, data_atual }) => {

    const navigate = useNavigate();
    const icone = 'icones/lixeira.svg'
    const [paciente, setPaciente] = useState('');

    async function buscarPaciente() {
        await axios.get(`${BASE_URL2}/pacientes/`).then((response) => {
            setPaciente(response.data)
        });
    }

    const editar = (id) => {
        navigate(`/cadastro-consulta/${id}`);
    };

    async function excluir(id) {
        let data = JSON.stringify({ id });
        let url = `${BASE_URL2}/consultas/${id}`;
        await axios
            .delete(url, data, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(function (response) {
                mensagemSucesso('Consulta deletada com sucesso')
                setDados(
                    nomes.filter((dado) => {
                        return dado.id !== id;
                    })
                );
            })
            .catch(function (error) {
                mensagemErro(`Erro ao excluir consulta`);
            });
    }

    const cadastrar = () => {
        navigate(`/cadastro-consulta/`);
    };

    useEffect(() => {
        buscarPaciente(); // eslint-disable-next-line
    }, []);

    return (
        <div className='container-principal-agenda'>
            <div className="container-principal-agenda-cabeçalho">
                <p>{dentista}</p>
                <p>{data_atual}</p>
            </div>
            <div className="container-principal-agenda-conteudo">
            <div className='cabeçalho-central'>
                    <BarraDePesquisa />
                    <button onClick={() => cadastrar()} className="add-botão">
                        Adicionar Consulta
                    </button>
                </div>
                {nomes.map(({ id, horaInicial, horaFinal, pacienteId }) => (
                    <div key={id} className="agenda-horarios-info" >
                        <div className="agenda-horarios-info-hora"
                            onClick={() => { editar(id) }}>
                            {horaInicial} - {horaFinal}
                        </div>
                        <div className="agenda-horarios-info-nome"
                            onClick={() => { editar(id) }}>
                            {paciente[pacienteId - 1].nome}
                        </div>
                        <td>
                            <img
                                className="coluna-item-icone"
                                src={icone}
                                alt=""
                                srcSet=""
                                width={30}
                                onClick={() => excluir(id)}
                            />
                        </td>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TelaInicialAgenda