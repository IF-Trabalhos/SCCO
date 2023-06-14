import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './pages/agenda/Agenda'
import Inicio from './pages/Inicio'
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
import RelatorioConvenio from './componentes/relatorios/RelatorioConvenio';
import RelatorioClinica from './componentes/relatorios/RelatorioClinica';
import RelatorioPaciente from './componentes/relatorios/RelatorioPaciente';
import RelatorioDentista from './componentes/relatorios/RelatorioDentista';
import CadastroConsulta from './pages/agenda/CadastroConsulta';


function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<Inicio />} />

					<Route path='/paciente' element={<Paciente titulo="Paciente" />}/>
          			<Route path='/cadastro-paciente/:handle?' element={<CadastroPaciente />}/>

					<Route path='/dentista' element={<Dentista titulo="Dentista" />}/>
          			<Route path='/cadastro-dentista/:handle?' element={<CadastroDentista />}/>

					<Route path='/recepcionista' element={<Recepcionista titulo="Recepcionista" />}/>
          			<Route path='/cadastro-recepcionista/:handle?' element={<CadastroRecepcionista/>}/>

					<Route path='/procedimento' element={<Procedimento titulo="Procedimento" />}/>
          			<Route path='/cadastro-procedimento/:handle?' element={<CadastroProcedimento/>}/>

					<Route path='/especialidade' element={<Especialidade titulo="Especialidade" />} />
          			<Route path='/cadastro-especialidade/:handle?' element={<CadastroEspecialidade/>} />
          
					<Route path='/convenio' element={<Convenio titulo="Convenio"/>} />
          			<Route path='/cadastro-convenio/:handle?' element={<CadastroConvenio />}/>

          			<Route path='/agenda' element={<Agenda />} />
					<Route path='/cadastro-consulta/:handle?' element={<CadastroConsulta />} />
                
					<Route path='/financeiro' element={<Financeiro />} />
					<Route path='/financeiro/paciente' element={<FinanceiroPaciente titulo="Fatura Paciente" />} />
					<Route path='/financeiro/cadastro-paciente/:handle?' element={<CadastroFinanceiroPaciente />} />

					<Route path='/financeiro/convenio' element={<FinanceiroConvenio titulo="Fatura Convenio" />} />
					<Route path='/financeiro/cadastro-convenio/:handle?' element={<CadastroFinanceiroConvenio />} />

					<Route path='/financeiro/mensal' element={<FinanceiroMensal titulo="Despesa Mensal" />} />
					<Route path='/financeiro/cadastro-mensal/:handle?' element={<CadastroFinanceiroMensal />} />
					<Route path='/financeiro/recorrente' element={<FinanceiroRecorrente titulo="Despesa Recorrente" />} />
					<Route path='/financeiro/cadastro-recorrente/:handle?' element={<CadastroFinanceiroRecorrente />} />

					<Route path='/relatorio' element={<RelatorioInicial/>}/>
					<Route path='relatorio/clinica' element={<PaginaGenericaRelatorio titulo={"Clinica"}/>}/>
					<Route path='/relatorio/clinica/gerar-relatorio' element={
						<RelatorioClinica/>}/>

					<Route path='relatorio/paciente' element={<PaginaGenericaRelatorio titulo={"Paciente"}/>}/>
					<Route path='relatorio/paciente/gerar-relatorio' element={<RelatorioPaciente/>}/>
					<Route path='relatorio/dentista' element={<PaginaGenericaRelatorio titulo={"Dentista"}/>}/>
					<Route path='relatorio/dentista/gerar-relatorio' element={<RelatorioDentista/>}/> 
					<Route path='relatorio/convenio'element={<PaginaGenericaRelatorio titulo={"Convenio"}/>}/>
					<Route path='/relatorio/convenio/gerar-relatorio' element={
						<RelatorioConvenio/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
