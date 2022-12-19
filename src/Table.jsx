import React from "react";

const Table = () => {
    return(
        <table className="main-table">
            <tr>
                <th className="right-border-set">Nome</th>
                <th className="right-border-set">E-mail</th>
                <th>Telefone</th>
            </tr>
            <tr>
                <td className="right-border-set">Alfreds</td>
                <td className="right-border-set">Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td className="right-border-set">Centro comercial </td>
                <td className="right-border-set">Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
    )
}

export default Table