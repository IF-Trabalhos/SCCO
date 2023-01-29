import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import FormCadastroConvenio from './componentes/FormCadastroConvenio';
import FormCadastroItem from './componentes/FormCadastroItem';
import FormCadastroPessoa from './componentes/FormCadastroPessoa';
import MenuLateral from './componentes/MenuLateral';
import Agenda from './paginas/Agenda'
import Cadastro from './paginas/Cadastro';
import PaginaGenerica from './paginas/PaginaGenerica';
import FormCadastroFatura from './componentes/FormCadastroFatura';
import axios from 'axios';
import { BASE_URL } from './config/axios';
import {
	colunaPessoa, colunaEspecialidade, colunaDespesa,
	colunaFaturaConvenio, colunaFaturaPaciente
}
	from './data/tabela_info';
import Financeiro from './paginas/Financeiro';
import RelatorioInicial from './paginas/RelatorioInicial';
import PaginaGenericaRelatorio from './componentes/PaginaGenericaRelatorio';

function App() {
	const [pessoa, setPessoa] = useState([]);
	const [convenio, setConvenio] = useState([]);
	const [especialidade, setEspecialidade] = useState([]);
	const [procedimento, setProcedimento] = useState([]);
	const [consulta, setConsultas] = useState([]);
	const [atualInfo, setAtualInfo] = useState([{}]);

	async function buscar() {
		await axios.get(`${BASE_URL}/pessoas`).then((response) => {
			setPessoa(response.data);
		})
		await axios.get(`${BASE_URL}/convenios`).then((response) => {
			setConvenio(response.data);
		})
		await axios.get(`${BASE_URL}/especialidades`).then((response) => {
			setEspecialidade(response.data);
		})
		await axios.get(`${BASE_URL}/procedimentos`).then((response) => {
			setProcedimento(response.data);
		})
		await axios.get(`${BASE_URL}/consultas`).then((response) => {
			setConsultas(response.data);
		})
	}

	useEffect(() => {
		buscar(); // eslint-disable-next-line
	}, []);

	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<PaginaGenerica
					titulo={"Home"} coluna={colunaPessoa} linha={pessoa} />}/>
          
					<Route path='/paciente' element={<PaginaGenerica 
					titulo="Paciente" coluna={colunaPessoa} linha={pessoa} setInfo={setAtualInfo} />}/>
          			<Route path='/paciente/cadastro' element={<Cadastro titulo="Cadastro Paciente" 
          			componenteCadastro={<FormCadastroPessoa labelDinamica = "N. Prontuario" 
					dados={pessoa} setDados={setPessoa} info={atualInfo} />}/>}/>

					<Route path='/dentista' element={<PaginaGenerica 
					titulo="Dentista" coluna={colunaPessoa} linha={pessoa} setInfo={setAtualInfo} />}/>
          			<Route path='/dentista/cadastro' element={<Cadastro titulo="Cadastro Dentista" 
          			componenteCadastro={<FormCadastroPessoa labelDinamica = "CRO"
					dados={pessoa} setDados={setPessoa} info={atualInfo}/>}/>}/>

					<Route path='/recepcionista' element={<PaginaGenerica 
					titulo="Recepcionista" coluna={colunaPessoa} linha={pessoa} setInfo={setAtualInfo} />}/>
          			<Route path='/recepcionista/cadastro' element={<Cadastro titulo="Cadastro Recepcionista"
					dados={pessoa} setDados={setPessoa} info={atualInfo}/>}/>

					<Route path='/procedimento' element={<PaginaGenerica 
					titulo="Procedimento" coluna={colunaEspecialidade} linha={procedimento} />}/>
          			<Route path='/procedimento/cadastro' element={<Cadastro titulo="Cadastro Procedimento" 
          			componenteCadastro={<FormCadastroItem></FormCadastroItem>} />}/>

					<Route path='/especialidade' element={<PaginaGenerica 
					titulo="Especialidade" coluna={colunaEspecialidade} linha={especialidade} />} />
          			<Route path='/especialidade/cadastro' element={<Cadastro titulo="Cadastro Especialidade" componenteCadastro={<FormCadastroItem>
						<label htmlFor="inputEspecialidade">Especialidade:</label><input type="text" name='especialidade' required htmlFor="inputEspecialidade" />
						<br />
					</FormCadastroItem>}/>} />
          
					<Route path='/convenio' element={<PaginaGenerica 
					titulo="Convenio" coluna={colunaPessoa} linha={convenio} />} />
          			<Route path='/convenio/cadastro' element={<Cadastro titulo="Cadastro Convenio" 
          			componenteCadastro={<FormCadastroConvenio/>}/>} />

          			<Route path='/agenda' element={<Agenda consultas={consulta} />} />
                
					<Route path='/financeiro' element={<Financeiro />} />
					<Route path='/financeiro/paciente' element={<PaginaGenerica
						titulo="Fatura Paciente" coluna={colunaFaturaPaciente}
						linha={pessoa} />} />
					<Route path='/financeiro/paciente/cadastro' element={<Cadastro
						titulo="Financeiro" componenteCadastro={<FormCadastroFatura primeiroInput={"Paciente:"}
							segundoInput={"Procedimentos:"}/>} />} />

					<Route path='/financeiro/convenio' element={<PaginaGenerica
						titulo="Fatura Convenio" coluna={colunaFaturaConvenio}
						linha={convenio} />} />

					<Route path='/financeiro/convenio/cadastro' element={<Cadastro
						titulo="Financeiro" componenteCadastro={<FormCadastroFatura primeiroInput={"Paciente:"}
							segundoInput={"Procedimentos:"}/>} />} />

					<Route path='/financeiro/mensal' element={<PaginaGenerica
						titulo="Despesa Mensal" coluna={colunaDespesa}
						linha={pessoa} />} />
					<Route path='/financeiro/mensal/cadastro' element={<Cadastro
						titulo="Financeiro" componenteCadastro={<FormCadastroFatura primeiroInput={"Despesa fixa:"}
							segundoInput={"Dt_Limite:"}/>} />} />
					<Route path='/financeiro/recorrente' element={<PaginaGenerica
						titulo="Despesa Recorrente" coluna={colunaDespesa}
						linha={pessoa} />} />
					<Route path='/financeiro/recorrente/cadastro' element={<Cadastro
						titulo="Financeiro" componenteCadastro={<FormCadastroFatura primeiroInput={"Despesa:"}
							segundoInput={"Quantidade:"}/>} />} />

					<Route path='/relatorio' element={<RelatorioInicial/>}/>
					<Route path='relatorio/clinica' element={<PaginaGenericaRelatorio titulo={"Relatorio Clinica"} colunas={colunaDespesa}
					linhas={pessoa}/>}/>
					<Route path='/relatorio/clinica/cadastro'/>
					<Route path='relatorio/paciente' element={<PaginaGenericaRelatorio titulo={"Relatorio Paciente"} colunas={colunaDespesa}
					linhas={pessoa}/>}/>
					<Route path='relatorio/dentista' element={<PaginaGenericaRelatorio titulo={"Relatorio Dentista"} colunas={colunaDespesa}
					linhas={pessoa}/>}/>
					<Route path='relatorio/convenio'element={<PaginaGenericaRelatorio titulo={"Relatorio Convênio"} colunas={colunaDespesa}
					linhas={pessoa}/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
