import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../../componentes/BarraDePesquisa";
import { useNavigate } from "react-router-dom";
import {colunaPessoa} from '../../data/tabela_info';
import axios from "axios";
import { BASE_URL2 } from '../../config/axios';
import { mensagemSucesso, mensagemErro } from '../../componentes/toastr';
import MenuLateral from "../../componentes/MenuLateral";

const Paciente = ({titulo}) => {

    const navigate = useNavigate();
    const icone = 'icones/lixeira.svg'

    const [dados, setDados] = useState([]);

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [numProntuario, setNumProntuario] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
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
        navigate(`/cadastro-paciente`);
    };

    const editar = (id) => {
        navigate(`/cadastro-paciente/${id}`);
    };

    async function excluir(id) {
        try {
          const response = await buscar(id); // Espera a função buscar(id) ser concluída e obtém a resposta da requisição
          const { nome, numProntuario, dataDeNascimento, cpf, email, telefone, rg, logradouro, bairro, uf, cidade, complemento, cep, numero } = response.data;
          const data = JSON.stringify({
            nome,
            ativo,
            numProntuario,
            dataDeNascimento,
            cpf,
            email,
            telefone,
            rg,
            logradouro,
            bairro,
            uf,
            cidade,
            complemento,
            cep,
            numero,
          });
      
          await axios.put(`${BASE_URL2}/pacientes/${id}`, data, {
            headers: { 'Content-Type': 'application/json' },
          });
      
          mensagemSucesso(`Paciente ${nome} deletado com sucesso!`);
          setDados(
            dados.filter((dado) => dado.id !== id)
          );
        } catch (error) {
          mensagemErro(error.response.data);
        }
      }
      
      async function buscar(id) {
        const response = await axios.get(`${BASE_URL2}/pacientes/${id}`);
        setId(response.data.id);
        setNumProntuario(response.data.numProntuario);
        setRg(response.data.rg);
        setNome(response.data.nome);
        setCpf(response.data.cpf);
        setDataDeNascimento(response.data.dataDeNascimento);
        setEmail(response.data.email);
        setTelefone(response.data.telefone);
        setLogradouro(response.data.logradouro);
        setCep(response.data.cep);
        setCidade(response.data.cidade);
        setBairro(response.data.bairro);
        setComplemento(response.data.complemento);
        setNumero(response.data.numero);
        setUf(response.data.uf);
      
        return response; // Retorna a resposta da requisição
      }

    useEffect(() => {
        axios.get(`${BASE_URL2}/pacientes/ativos`)
        .then((response) => {
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
                            <th className="coluna-icones"></th>
                        </tr>
                    </tbody>
                        {dados.map(({id, nome, email, telefone}) => (
                            <tbody key={id} >
                            <tr className="tabela-conteudo">
                                <td className="borda-lateral" onClick={() => editar(id)}>{nome}</td>
                                <td className="borda-lateral" onClick={() => editar(id)}>{email}</td>
                                <td className="coluna-lateral" onClick={() => editar(id)}>{telefone}</td>
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

export default Paciente