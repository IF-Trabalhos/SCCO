import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Recepcionista = () => {
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
            coluna1: "Recepcionista 1", coluna2: "rp1@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Recepcionista 2", coluna2: "rp2@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Recepcionista 3", coluna2: "rp3@gmail.com", coluna3: "32991608320"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Recepcionista</h1>
            </div>
            <TelaInicialGenerica titulo={'Recepcionista'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Recepcionista