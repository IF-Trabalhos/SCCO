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
            {linhas.map(({coluna1, coluna2, coluna3}) => (
                <tr className="tabela-conteudo">
                    <td className="borda-lateral">{coluna1}</td>
                    <td className="borda-lateral">{coluna2}</td>
                    <td>{coluna3}</td>
                </tr>
            ))}
        </table>
    )
}

export default Tabela