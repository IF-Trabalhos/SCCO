import React from "react";
import './Tabela.css'

const Tabela = ({colunas, linhas}) => {
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