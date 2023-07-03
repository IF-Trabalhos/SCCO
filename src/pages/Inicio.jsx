import React from "react";
import MenuLateral from "../componentes/MenuLateral";
import CanvasJSReact from '@canvasjs/react-charts';
import './Inicio.css'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Inicio = () => {

    const options = {
        title: {
            text: "Quantidade de consultas"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Janeiro",  y: 10  },
                { label: "Fevereiro", y: 15  },
                { label: "Março", y: 25  },
                { label: "Abril",  y: 30  },
                { label: "Maio",  y: 28  },
                { label: "Junho",  y: 30  },
                { label: "Julho",  y: 30  }
            ]
        }
        ]
    }

    return (
        <div className="container">
            <MenuLateral />
            <div className="conteudo-principal">
                <div className='cabeçalho-principal' >
                    <h1>Inicio</h1>
                </div>
                <div className='container-principal-central'>
                    <h1 className="visao-geral">Visão Geral da Clínica</h1>
                    <div className='container-dados-clinica'>
                        <CanvasJSChart options = {options} />
                        <div className='informacoes-completa'>
                            <div className='informacoes'>
                                    Pacientes Ativos: 23
                            </div>
                            <div className='informacoes'>
                                    Dentistas Ativos: 5
                            </div>
                            <div className='informacoes'>
                                    Pacientes Atendidos: 23
                            </div>
                            <div className='informacoes'>
                                    Procedimentos Realizados: 23
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio