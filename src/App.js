import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './pages/agenda/Agenda'
import axios from 'axios';
import { BASE_URL } from './config/axios';
import {colunaDespesa}
	from './data/tabela_info';
import Financeiro from './pages/financeiro/Financeiro';
import RelatorioInicial from './pages/RelatorioInicial';
import PaginaGenericaRelatorio from './componentes/PaginaGenericaRelatorio';
import Paciente from './pages/paciente/Paciente'
import CadastroPaciente from './pages/paciente/CadastroPaciente'
import Dentista from './pages/dentista/Dentista'
import CadastroDentista from './pages/dentista/CadastroDentista'
import Recepcionista from './pages/recepcionista/Recepcionista'
import CadastroRecepcionista from './pages/recepcionista/CadastroRecepcionista'
import Procedimento from './pages/procedimento/Procedimento'
import CadastroProcedimento from './pages/procedimento/CadastroProcedimento';
import Especialidade from './pages/especialidade/Especialidade';
import CadastroEspecialidade from './pages/especialidade/CadastroEspecialidade';
import Convenio from './pages/convenio/Convenio';
import CadastroConvenio from './pages/convenio/CadastroConvenio';
import FinanceiroPaciente from './pages/financeiro/paciente/FinanceiroPaciente';
import CadastroFinanceiroPaciente from './pages/financeiro/paciente/CadastroFinanceiroPaciente';
import FinanceiroConvenio from './pages/financeiro/convenio/FinanceiroConvenio';
import CadastroFinanceiroConvenio from './pages/financeiro/convenio/CadastroFinanceiroConvenio';
import FinanceiroMensal from './pages/financeiro/mensal/FinanceiroMensal';
import FinanceiroRecorrente from './pages/financeiro/recorrente/FinanceiroRecorrente';
import CadastroFinanceiroMensal from './pages/financeiro/mensal/CadastroFinanceiroMensal';
import CadastroFinanceiroRecorrente from './pages/financeiro/recorrente/CadastroFinanceiroRecorrente';


function App() {
	const [pessoa, setPessoa] = useState([]);

	async function buscar() {
		await axios.get(`${BASE_URL}/pessoas`).then((response) => {
			setPessoa(response.data);
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
					<Route path='/paciente' element={<Paciente titulo="Paciente" />}/>
          			<Route path='/cadastro-paciente/:handle?' element={<CadastroPaciente />}/>

					<Route path='/dentista' element={<Dentista titulo="Dentista" />}/>
          			<Route path='/cadastro-dentista/:handle?' element={<CadastroDentista />}/>

					<Route path='/recepcionista' element={<Recepcionista titulo="Recepcionista" />}/>
          			<Route path='/cadastro-recepcionista/:handle?' element={<CadastroRecepcionista/>}/>

					<Route path='/procedimento' element={<Procedimento titulo="Procedimento" />}/>
          			<Route path='/procedimento/cadastro' element={<CadastroProcedimento/>}/>

					<Route path='/especialidade' element={<Especialidade titulo="Especialidade" />} />
          			<Route path='/especialidade/cadastro' element={<CadastroEspecialidade/>} />
          
					<Route path='/convenio' element={<Convenio titulo="Convenio"/>} />
          			<Route path='/convenio/cadastro' element={<CadastroConvenio />}/>

          			<Route path='/agenda' element={<Agenda />} />
                
					<Route path='/financeiro' element={<Financeiro />} />
					<Route path='/financeiro/paciente' element={<FinanceiroPaciente titulo="Fatura Paciente" />} />
					<Route path='/financeiro/paciente/cadastro' element={<CadastroFinanceiroPaciente primeiroInput={"Paciente:"}
							segundoInput={"Procedimentos:"}/>} />

					<Route path='/financeiro/convenio' element={<FinanceiroConvenio titulo="Fatura Convenio" />} />
					<Route path='/financeiro/convenio/cadastro' element={<CadastroFinanceiroConvenio primeiroInput={"Paciente:"}
							segundoInput={"Procedimentos:"}/>} />

					<Route path='/financeiro/mensal' element={<FinanceiroMensal titulo="Despesa Mensal" />} />
					<Route path='/financeiro/mensal/cadastro' element={<CadastroFinanceiroMensal primeiroInput={"Despesa fixa:"}
							segundoInput={"Dt_Limite:"}/>} />
					<Route path='/financeiro/recorrente' element={<FinanceiroRecorrente titulo="Despesa Recorrente" />} />
					<Route path='/financeiro/recorrente/cadastro' element={<CadastroFinanceiroRecorrente primeiroInput={"Despesa:"}
							segundoInput={"Quantidade:"}/>} />

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
