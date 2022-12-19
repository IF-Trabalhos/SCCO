import React from "react";
import './Tabela.css'

const Tabela = () => {
    const colunas =[
        {
            nome: "Nome", classe:"borda-lateral", sort: true
        },
        {
            nome: "E-mail", classe:"borda-lateral", sort: true
        },
        {
            nome: "Telefone", classe:"", sort: true
        },
    ]

    const linhas =[
        {
            nome: "Fernando Souza", email: "fsouza@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Igor Rosa", email: "igrosa@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Giuliano Leite", email: "gleite@gmail.com", telefone: "32991608320"  
        },
    ]

    return(
        <table className="tabela-principal">
            <tr>
                {colunas.map(({nome, classe}) => (
                    <th className={classe}>{nome}</th>
                ))}
            </tr>
            {linhas.map(({nome, email, telefone}) => (
                <tr className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{email}</td>
                    <td>{telefone}</td>
                </tr>
            ))}
        </table>
    )
}

export default Tabela