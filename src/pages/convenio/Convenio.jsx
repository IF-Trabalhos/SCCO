import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { useNavigate } from "react-router-dom";
import {colunaPessoa }from '../../data/tabela_info';
import axios from "axios";
import MenuLateral from '../../componentes/MenuLateral'
import { BASE_URL } from '../../config/axios';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';

const Convenio = ({titulo}) => {

    const navigate = useNavigate();

    const [dados, setDados] = useState([]);

    const cadastrar = () => {
        navigate(`/cadastro-convenio`);
    };

    const editar = (id) => {
        navigate(`/cadastro-convenio/${id}`);
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/convenios`).then((response) => {
          setDados(response.data);
        });
      }, []);

    return(
        <div className="container">
            <MenuLateral />
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
                            {colunaPessoa.map(({id, nome, classe}) => (
                                <th key={id} className={classe}>{nome}</th>
                            ))}
                        </tr>
                    </tbody>
                        {dados.map(({id, nome, email, telefone}) => (
                            <tbody key={id} >
                            <tr onClick={() => editar(id)} className="tabela-conteudo">
                                <td className="borda-lateral">{nome}</td>
                                <td className="borda-lateral">{email}</td>
                                <td>{telefone}</td>
                            </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Convenio