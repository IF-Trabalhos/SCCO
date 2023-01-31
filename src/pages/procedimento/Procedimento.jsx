import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { useNavigate } from "react-router-dom";
import {colunaEspecialidade}from '../../data/tabela_info';
import axios from "axios";
import { BASE_URL } from '../../config/axios';

const Procedimento = ({titulo, setInfo}) => {

    const navigate = useNavigate();

    const [dados, setDados] = useState([]);

    const cadastrar = () => {
        navigate(`/cadastro-procedimento`);
    };

    const editar = (id) => {
        navigate(`/cadastro-procedimento/${id}`);
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/procedimentos`).then((response) => {
          setDados(response.data);
        });
      }, []);

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
                        {dados.map(({id, nome, especialidade, status}) => (
                            <tbody key={id} >
                            <tr onClick={() => editar(id)} className="tabela-conteudo">
                                <td className="borda-lateral">{nome}</td>
                                <td className="borda-lateral">{especialidade}</td>
                                {status === true ?  
                                <td>Ativo</td> :
                                <td>Inativo</td>}
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