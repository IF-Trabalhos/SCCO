import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";
import { useState } from "react";
import Cadastro from "./Cadastro";


const PaginaGenerica = ({titulo}) => {
    const estadosPagina =[
        {id: 1, nome: "paginaInicial"},
        {id: 2, nome: "cadastro"}
    ]
    const [estado, setEstado] = useState(estadosPagina[0].nome);
    

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
                <h1>{titulo}</h1>
            </div>
            <div className="body-principal">
                {estado === estadosPagina[0].nome &&
                <TelaInicialGenerica funcao={()=>(setEstado(estadosPagina[1].nome))} titulo={titulo} colunas={colunas} linhas={linhas} />}
                {estado === estadosPagina[1].nome && <Cadastro titulo = {titulo}/>}
                
            </div>
        </div>
    )
}

export default PaginaGenerica