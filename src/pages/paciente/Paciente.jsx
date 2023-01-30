import React from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { Link } from "react-router-dom";
import {colunaPessoa}from '../../data/tabela_info';

const Paciente = ({titulo, setInfo}) => {
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
                        {colunaPessoa.map(({id, nome, classe}) => (
                            <th key={id} className={classe}>{nome}</th>
                        ))}
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default Paciente