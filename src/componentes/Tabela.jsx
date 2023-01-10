import React from "react";
import './Tabela.css'

const Tabela = ({pessoa, colunas, linhas}) => {
    return(pessoa) ? (
        <table className="tabela-principal">
            <tr>
                {colunas.map(({id, nome, classe}) => (
                    <th key={id} className={classe}>{nome}</th>
                ))}
            </tr>
            {linhas.map(({id, nome, email, telefone}) => (
                <tr key={id} className="tabela-conteudo">
                    <td className="borda-lateral">{nome}</td>
                    <td className="borda-lateral">{email}</td>
                    <td>{telefone}</td>
                </tr>
            ))}
        </table>
    ) : 
    (
        <table className="tabela-principal">
        <tr>
            {colunas.map(({id, nome, classe}) => (
                <th key={id} className={classe}>{nome}</th>
            ))}
        </tr>
        {linhas.map(({id, nome, especialidade, status}) => (
            <tr key={id} className="tabela-conteudo">
                <td className="borda-lateral">{nome}</td>
                <td className="borda-lateral">{especialidade}</td>
                {status === true ?  
                <td>Ativo</td> :
                <td>Inativo</td>}
            </tr>
        ))}
        </table>
    )
}

export default Tabela