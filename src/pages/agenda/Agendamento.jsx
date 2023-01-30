import React from "react";
import BotãoSalvar from "../../componentes/BotãoSalvar";
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
                        <select name="pacientes" id="pacientes">
                            <option value={infos[0]}>{infos[0]}</option>
                        </select>
                    </div>
                    <div className="corpo-consulta-linha-nome">
                        <label for="data">Nome do Dentista: </label>  
                        <select name="dentistas" id="dentistas">
                            <option value={infos[1]}>{infos[1]}</option>
                        </select>
                    </div>
                    <div className="corpo-consulta-linha">
                        <label for="data">Telefone: </label>  
                        <input type="number" />
                        <label for="data">E-mail: </label>  
                        <input type="email" />
                    </div>
                    <div className="corpo-consulta-linha-botoes">
                        <BotãoSalvar setBotaoFalse = {setBotaoFalse} />
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}

export default Agendamento