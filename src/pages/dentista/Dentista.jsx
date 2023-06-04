import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { useNavigate } from "react-router-dom";
import {colunaPessoa}from '../../data/tabela_info';
import axios from "axios";
import { BASE_URL2 } from '../../config/axios';

const Dentista = ({titulo, setInfo}) => {

    const navigate = useNavigate();
    const icone = 'icones/lixeira.svg'

    const [dados, setDados] = useState([]);

    const cadastrar = () => {
        navigate(`/cadastro-dentista`);
    };

    const editar = (id) => {
        navigate(`/cadastro-dentista/${id}`);
    };

    async function excluir(id) {
        let data = JSON.stringify({ id });
        let url = `${BASE_URL2}/dentistas/${id}`;
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
            console.log(`Erro ao excluir o dentista`);
          });
      }

    useEffect(() => {
        axios.get(`${BASE_URL2}/dentistas`).then((response) => {
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
                            {colunaPessoa.map(({id, nome, classe}) => (
                                <th key={id} className={classe}>{nome}</th>
                            ))}
                        </tr>
                    </tbody>
                        {dados.map(({id, nome, email, telefone}) => (
                            <tbody key={id} >
                            <tr className="tabela-conteudo">
                                <td className="borda-lateral" onClick={() => editar(id)}>{nome}</td>
                                <td className="borda-lateral" onClick={() => editar(id)}>{email}</td>
                                <td onClick={() => editar(id)}>{telefone}</td>
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

export default Dentista