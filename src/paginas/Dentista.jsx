import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Dentista = () => {
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
            coluna1: "Dentista Sobrenome 1", coluna2: "d1@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Dentista Sobrenome 2", coluna2: "d2@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Dentista Sobrenome 3", coluna2: "d3@gmail.com", coluna3: "32991608320"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Dentista</h1>
            </div>
            <TelaInicialGenerica titulo={'Dentista'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Dentista