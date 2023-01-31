import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { Link } from "react-router-dom";
import {colunaEspecialidade}from '../../data/tabela_info';
import axios from "axios";
import { BASE_URL } from '../../config/axios';

const Especialidade = ({titulo, setInfo}) => {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/especialidades`).then((response) => {
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
                <Link onClick={() => setInfo([{}])} className="add-botão" to={"cadastro"}>
                    Adicionar {titulo}
                </Link>
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
                            <tr className="tabela-conteudo">
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

export default Especialidade