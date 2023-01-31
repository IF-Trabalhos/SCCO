import React from "react";
import { useNavigate } from "react-router-dom";
import './Tabela.css'

const Tabela = ({pessoa, colunas, linhas, setInfo}) => {
    const navigate = useNavigate();

    const editar = (atual, id) => {
        let value = id - 1
        setInfo([atual[value]])
        navigate("cadastro");
    };

    return(
        <table className="tabela-principal">
            <tbody>
                <tr>
                    {colunas.map(({id, nome, classe}) => (
                        <th key={id} className={classe}>{nome}</th>
                    ))}
                </tr>
            </tbody>
            {pessoa === "Generica" ? linhas.map(({id, nome, email, telefone}) => (
            <tbody key={id}>
                <tr onClick={() => editar(linhas, id)} className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{email}</td>
                    <td>{telefone}</td>
                </tr>
            </tbody>
            )) 
            : pessoa === "Especialista" ? 
            linhas.map(({id, nome, especialidade, status}) => (
            <tbody key={id}>
                <tr className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{especialidade}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            </tbody>    
            ))
            : pessoa === "Fatura Paciente" ?
            linhas.map(({id, nome, telefone, status}) => (
            <tbody key={id}>
                <tr className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{telefone}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            </tbody>
            )) 
            : pessoa === "Fatura Convenio" ?
            linhas.map(({id, nome_paciente, nome, status}) => (
            <tbody key={id} >
                <tr className="tabela-conteudo">
                    <td className="borda-lateral">{nome_paciente}</td>
                    <td className="borda-lateral">{nome}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            </tbody>
            ))  : 
            linhas.map(({id, nome, dt_limite, status}) => (
            <tbody key={id}>
                <tr className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{dt_limite}</td>
                    {status === true ?  
                    <td>Ativo</td> :
                    <td>Inativo</td>}
                </tr>
            </tbody>
            ))
            }
        </table>
    )
}

export default Tabela