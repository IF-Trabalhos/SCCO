import React, {useState} from "react";
import './Agendamento.css'

const Agendamento= ({trigger, infos, setBotaoFalse}) => {
    return(trigger) ? (
         <div className='container-consulta'>
            <div className="corpo-consulta">
                <div className="corpo-consulta-titulo">Agendamento</div>
                <div className="corpo-consulta-conteudo">
                    <div className="corpo-consulta-linha">
                        <label for="data">Data: </label>  
                        <input type="date" />
                        <label for="data">Horário: </label>  
                        <input type="time" value={infos[2]}/>
                    </div>
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Nome do Paciente: </label>  
                        <input type="text" value={infos[0]}/>
                    </div>
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Nome do Dentista: </label>  
                        <input type="text" value={infos[1]}/>
                    </div>
                    <div className="corpo-consulta-linha">
                        <label for="data">Telefone: </label>  
                        <input type="number" />
                        <label for="data">E-mail: </label>  
                        <input type="email" />
                    </div>
                    <div className="corpo-consulta-linha-botoes">
                        <button type="button" id="botao-excluir" onClick={() => {
                                    setBotaoFalse(false)
                                }} >Excluir</button>
                        <button type="button" id="botao-salvar" onClick={() => {
                                    setBotaoFalse(false)
                                }}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}

export default Agendamento