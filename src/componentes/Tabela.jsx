import React from "react";
import { useNavigate } from "react-router-dom";
import './Tabela.css'

const Tabela = ({pessoa, colunas, linhas, setInfo}) => {
    const navigate = useNavigate();

    const editar = (atual, id) => {
        let value = id - 1
        console.log(atual[value])
        setInfo([atual[value]])
        navigate("cadastro");
    };

    return(
        <table className="tabela-principal">
            <tr>
                {colunas.map(({id, nome, classe}) => (
                    <th key={id} className={classe}>{nome}</th>
                ))}
            </tr>
            {pessoa === "Generica" ? linhas.map(({id, nome, email, telefone}) => (
                <tr onClick={() => editar(linhas, id)} key={id} className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{email}</td>
                    <td>{telefone}</td>
                </tr>
            )) 
            : pessoa === "Especialista" ? 
            linhas.map(({id, nome, especialidade, status}) => (
                <tr key={id} className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{especialidade}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            ))
            : pessoa === "Fatura Paciente" ?
            linhas.map(({id, nome, telefone, status}) => (
                <tr key={id} className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{telefone}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            )) 
            : pessoa === "Fatura Convenio" ?
            linhas.map(({id, nome_paciente, nome, status}) => (
                <tr key={id} className="tabela-conteudo">
                    <td className="borda-lateral">{nome_paciente}</td>
                    <td className="borda-lateral">{nome}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            ))  : 
            linhas.map(({id, nome, dt_limite, status}) => (
                <tr key={id} className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{dt_limite}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            ))
            }
        </table>
    )
}

export default Tabela