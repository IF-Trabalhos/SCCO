import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Procedimento = () => {
    const colunas =[
        {
            nome: "Nome", classe:"borda-lateral", sort: true
        },
        {
            nome: "Especialidade", classe:"borda-lateral", sort: true
        },
        {
            nome: "Status", classe:"", sort: true
        },
    ]
    const linhas =[
        {
            coluna1: "Procedimento  1", coluna2: "Especialidade 1", coluna3: "Ativo"  
        },
        {
            coluna1: "Procedimento 2", coluna2: "Especialidade 2", coluna3: "Ativo"  
        },
        {
            coluna1: "Procedimento 3", coluna2: "Especialidade 3", coluna3: "Inativo"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Procedimento</h1>
            </div>
            <TelaInicialGenerica titulo={'Procedimento'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Procedimento