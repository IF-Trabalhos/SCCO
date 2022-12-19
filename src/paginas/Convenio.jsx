import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Convenio= () => {
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
            coluna1: "Convenio 1", coluna2: "c1@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Convenio 2", coluna2: "c2@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Convenio 3", coluna2: "c3@gmail.com", coluna3: "32991608320"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Convênio</h1>
            </div>
            <TelaInicialGenerica titulo={'Convênio'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Convenio