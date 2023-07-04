import React, {useState, useEffect} from "react";
import axios from "axios";
import MenuLateral from "../componentes/MenuLateral";
import CanvasJSReact from '@canvasjs/react-charts';
import './Inicio.css'
import { BASE_URL2 } from "../config/axios";
import { getListaMeses } from "../data/utils";

var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Inicio = () => {

    const [qtdConsulta, setQtdConsultas] = useState('');    
    const [qtdPacientes, setQtdPacientes] = useState('');
    const [qtdDentistasAtivo, setQtdDentistasAtivo] = useState('');    
    const [qtdPacientesAtivo, setQtdPacientesAtivo] = useState('');
    const listaMeses = getListaMeses()
    const [qtdConsultaMes, setQtdConsultaMes] = useState([])

    async function buscarQtdConsulta(){
        const lista = []
        await axios.get(`${BASE_URL2}/consultas/quantidade/2023-0${listaMeses[0] + 1}-01/2023-0${listaMeses[1] + 1}-01`).then((response) => {
            lista.push(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade/2023-0${listaMeses[1] + 1}-01/2023-0${listaMeses[2] + 1}-01`).then((response) => {
            lista.push(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade/2023-0${listaMeses[2] + 1}-01/2023-0${listaMeses[3] + 1}-01`).then((response) => {
            lista.push(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade/2023-0${listaMeses[3] + 1}-01/2023-0${listaMeses[4] + 1}-01`).then((response) => {
            lista.push(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade/2023-0${listaMeses[4] + 1}-01/2023-0${listaMeses[5] + 1}-01`).then((response) => {
            lista.push(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade/2023-0${listaMeses[5] + 1}-01/2023-0${listaMeses[5] + 2}-01`).then((response) => {
            lista.push(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/paciente/quantidade/2022-01-01/2023-12-30`).then((response) => {
            setQtdPacientes(response.data)
        });
        await axios.get(`${BASE_URL2}/consultas/quantidade/2022-01-01/2023-12-30`).then((response) => {
            setQtdConsultas(response.data)
        });
        await axios.get(`${BASE_URL2}/pacientes/ativos/quantidade`).then((response) => {
            setQtdPacientesAtivo(response.data)
        });
        await axios.get(`${BASE_URL2}/dentistas/ativos/quantidade`).then((response) => {
            setQtdDentistasAtivo(response.data)
        });
        setQtdConsultaMes(lista)
    }

    const options = {
        title: {
            text: "Quantidade de consultas"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: meses[listaMeses[0]], y: qtdConsultaMes[0]},
                { label: meses[listaMeses[1]], y: qtdConsultaMes[1] },
                { label: meses[listaMeses[2]], y: qtdConsultaMes[2] },
                { label: meses[listaMeses[3]],  y: qtdConsultaMes[3] },
                { label: meses[listaMeses[4]],  y: qtdConsultaMes[4]  },
                { label: meses[listaMeses[5]],  y: qtdConsultaMes[5]  },
            ]
        }
        ]
    }

    useEffect(() => {
        buscarQtdConsulta(); // eslint-disable-next-line
      }, []);

    console.log(qtdConsultaMes)
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
                                    Pacientes Ativos: {qtdPacientesAtivo}
                            </div>
                            <div className='informacoes'>
                                    Dentistas Ativos: {qtdDentistasAtivo}
                            </div>
                            <div className='informacoes'>
                                    Pacientes Atendidos: {qtdPacientes}
                            </div>
                            <div className='informacoes'>
                                    Procedimentos Realizados: {qtdConsulta}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio