import React from "react";
import './AddBotão.css'

const AddBotão = ({titulo, funcao}) => {
    return(
        <button onClick={funcao} className="add-botão" type="button">Adicionar {titulo}</button>
    )
}

export default AddBotão
