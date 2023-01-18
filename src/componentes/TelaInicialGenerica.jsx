import React from "react";
import BarraDePesquisa from "./BarraDePesquisa";
import Tabela from "./Tabela";
import AddBotão from "./AddBotão";

const TelaInicialGenerica = ({titulo, colunas , linhas}) => {

    const generica = ["Paciente", "Dentista", "Recepcionista", "Convenio"];
    const especialista = ["Especialidade", "Procedimento"];
    let pessoa = ""
    generica.includes(titulo) ? pessoa = "Generica" 
    : especialista.includes(titulo) ? pessoa = "Especialista"
    : pessoa = titulo

    return(
        <div className='container-principal-central'>
            <div className='cabeçalho-central'>
                <BarraDePesquisa />
                <AddBotão titulo={titulo} />
            </div>
            <div className='conteudo-principal-central'>
                <Tabela pessoa={pessoa} colunas={colunas} linhas={linhas} />
            </div>
        </div>
    )
}

export default TelaInicialGenerica