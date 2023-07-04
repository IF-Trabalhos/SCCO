import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { useNavigate } from "react-router-dom";
import {colunaPessoa}from '../../data/tabela_info';
import axios from "axios";
import { BASE_URL2 } from '../../config/axios';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import MenuLateral from "../../componentes/MenuLateral";

const Dentista = ({titulo, setInfo}) => {

    const navigate = useNavigate();
    const icone = 'icones/lixeira.svg'

    const [dados, setDados] = useState([]);
    const [dadosTemp, setDadosTemp] = useState([]);

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [cro, setCro] = useState('');
    const [cpf, setCpf] = useState('');
    const [especialidadeId, setEspecialidadeId] = useState(1);
    const [email, setEmail] = useState('');
    const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
    const [telefone, setTelefone] = useState('');
    const [rg, setRg] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [ativo, setAtivo] = useState(false);

    const cadastrar = () => {
        navigate(`/cadastro-dentista`);
    };

    const editar = (id) => {
        navigate(`/cadastro-dentista/${id}`);
    };

    async function excluir(id) {
        await buscar(id)
        console.log(especialidadeId)
        let data = {
            nome, ativo, cro, dataDeNascimento, cpf, email, telefone, especialidadeId,
            rg, logradouro, bairro, uf, cidade, complemento, cep, numero
          };
        data = JSON.stringify(data);
        await axios
        .put(`${BASE_URL2}/dentistas/${id}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Dentista ${nome} deletado com sucesso!`)
          setDados(
            dados.filter((dado) => {
              return dado.id !== id;
            })
          );
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
      }

      async function buscar(id) {
        await axios.get(`${BASE_URL2}/dentistas/${id}`).then((response) => {
          setDadosTemp(response.data);
          console.log(response.data)
        });
        setId(dadosTemp.id);
        setCro(dadosTemp.cro)
        setRg(dadosTemp.rg);
        setNome(dadosTemp.nome);
        setCpf(dadosTemp.cpf);
        setDataDeNascimento(dadosTemp.dataDeNascimento)
        setEspecialidadeId(dadosTemp.especialidadeId);
        setEmail(dadosTemp.email);
        setTelefone(dadosTemp.telefone);
        setLogradouro(dadosTemp.logradouro)
        setCep(dadosTemp.cep)
        setCidade(dadosTemp.cidade)
        setBairro(dadosTemp.bairro)
        setComplemento(dadosTemp.complemento)
        setNumero(dadosTemp.numero)
        setUf(dadosTemp.uf)
      }

    useEffect(() => {
        axios.get(`${BASE_URL2}/dentistas/ativos`).then((response) => {
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
        </div>
    )
}

export default Dentista