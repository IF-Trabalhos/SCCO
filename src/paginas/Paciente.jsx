import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Paciente = () => {
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
            coluna1: "Paciente Sobrenome 1", coluna2: "p1@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Paciente Sobrenome 2", coluna2: "p2@gmail.com", coluna3: "32991608320"  
        },
        {
            coluna1: "Paciente Sobrenome 3", coluna2: "p3@gmail.com", coluna3: "32991608320"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Paciente</h1>
            </div>
            <TelaInicialGenerica titulo={'Paciente'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Paciente