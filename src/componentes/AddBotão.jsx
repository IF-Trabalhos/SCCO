import React from "react";
import './AddBotão.css'

const AddBotão = ({titulo}) => {
    return(
        <button className="add-botão" type="button">Adicionar {titulo}</button>
    )
}

export default AddBotão
