import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { useNavigate } from "react-router-dom";
import {colunaEspecialidade}from '../../data/tabela_info';
import axios from "axios";
import { BASE_URL } from '../../config/axios';
import './Procedimento.css';
const Procedimento = ({titulo, setInfo}) => {

    const navigate = useNavigate();
    const icone = 'icones/lixeira.svg'

    const [dados, setDados] = useState([]);
    const [dadosEspecialidade, setDadosEspecialidade] = useState([]);

    const cadastrar = () => {
        navigate(`/cadastro-procedimento`);
    };

    const editar = (id) => {
        navigate(`/cadastro-procedimento/${id}`);
    };

    async function excluir(id) {
        let data = JSON.stringify({ id });
        let url = `${BASE_URL}/procedimentos/${id}`;
        await axios
          .delete(url, data, {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function (response) {
             setDados(
              dados.filter((dado) => {
                return dado.id !== id;
              })
            );
          })
          .catch(function (error) {
            console.log(`Erro ao excluir o paciente`);
          });
      }

    async function buscarEspecialidade() {
        await axios.get(`${BASE_URL}/especialidades`).then((response) => {
          setDadosEspecialidade(response.data)
        });
      }

    useEffect(() => {
        buscarEspecialidade(); // eslint-disable-next-line
    }, []);

    useEffect(() => {
        axios.get(`${BASE_URL}/procedimentos`).then((response) => {
          setDados(response.data);
        });
      }, []);

    console.log(dadosEspecialidade[0])

    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>{titulo}</h1>
            </div>
            <div className='container-principal-central'>
            <div className='cabeçalho-central'>
                <BarraDePesquisa />
                <button onClick={() => cadastrar()} className="add-botão">
                    Adicionar {titulo}
                </button>
            </div>
            <div className='conteudo-principal-central'>
                <table className="tabela-principal">
                    <tbody>
                        <tr>
                            {colunaEspecialidade.map(({id, nome, classe}) => (
                                <th key={id} className={classe}>{nome}</th>
                            ))}
                        </tr>
                    </tbody>
                        {dados.map(({id, nome, especialidadeId, status}) => (
                            <tbody key={id} >
                            <tr className="tabela-conteudo">
                                <td className="borda-lateral" onClick={() => editar(id)}>{nome}</td>
                                <td className="borda-lateral" onClick={() => editar(id)}>
                                    {dadosEspecialidade[especialidadeId - 1].nome}
                                </td>
                                {status === true ?  
                                <td onClick={() => editar(id)}>Ativo</td> :
                                <td onClick={() => editar(id)}>Inativo</td>}
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
                            </tr>
                            </tbody>
                        ))}
                </table>
            </div>
        </div>
        </div>
    )
}

export default Procedimento