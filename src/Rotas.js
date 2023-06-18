import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './pages/agenda/Agenda'
import axios from 'axios';
import { BASE_URL } from './config/axios';
import {colunaDespesa} from './data/tabela_info';
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
import { Login } from './pages/Login';

export const Rotas = () => {
    const [pessoa, setPessoa] = useState([]);

	async function buscar() {
		await axios.get(`${BASE_URL}/pessoas`).then((response) => {
			setPessoa(response.data);
		})
	}

	useEffect(() => {
		buscar(); // eslint-disable-next-line
	}, []);

    const RequireAuth = ({ children }) => {
        return children
        //return localStorage.getItem("token") ? children : <Navigate to = "/"/> 
    }
	return (
			<div>
				<Routes>
                    <Route path='/' element={<Login/>}/> 

					<Route path='/home' element={<RequireAuth><Inicio /></RequireAuth>} />

					<Route path='/paciente' element={<RequireAuth><Paciente titulo="Paciente" /></RequireAuth>}/>
          			<Route path='/cadastro-paciente/:handle?' element={<RequireAuth><CadastroPaciente /></RequireAuth>}/>

					<Route path='/dentista' element={<RequireAuth><Dentista titulo="Dentista" /></RequireAuth>}/>
          			<Route path='/cadastro-dentista/:handle?' element={<RequireAuth><CadastroDentista /></RequireAuth>}/>

					<Route path='/recepcionista' element={<RequireAuth><Recepcionista titulo="Recepcionista" /></RequireAuth>}/>
          			<Route path='/cadastro-recepcionista/:handle?' element={<CadastroRecepcionista/>}/>

					<Route path='/procedimento' element={<RequireAuth><Procedimento titulo="Procedimento" /></RequireAuth>}/>
          			<Route path='/cadastro-procedimento/:handle?' element={<RequireAuth><CadastroProcedimento/></RequireAuth>}/>

					<Route path='/especialidade' element={<RequireAuth><Especialidade titulo="Especialidade" /></RequireAuth>} />
          			<Route path='/cadastro-especialidade/:handle?' element={<RequireAuth><CadastroEspecialidade/></RequireAuth>} />
          
					<Route path='/convenio' element={<RequireAuth><Convenio titulo="Convenio"/></RequireAuth>} />
          			<Route path='/cadastro-convenio/:handle?' element={<RequireAuth><CadastroConvenio /></RequireAuth>}/>

          			<Route path='/agenda' element={<RequireAuth><Agenda /></RequireAuth>} />
					<Route path='/cadastro-consulta/:handle?' element={<RequireAuth><CadastroConsulta /></RequireAuth>} />
                
					<Route path='/financeiro' element={<RequireAuth><Financeiro /></RequireAuth>} />
					<Route path='/financeiro/paciente' element={<RequireAuth><FinanceiroPaciente titulo="Fatura Paciente" /></RequireAuth>} />
					<Route path='/financeiro/cadastro-paciente/:handle?' element={<RequireAuth><CadastroFinanceiroPaciente /></RequireAuth>} />

					<Route path='/financeiro/convenio' element={<RequireAuth><FinanceiroConvenio titulo="Fatura Convenio" /></RequireAuth>} />
					<Route path='/financeiro/cadastro-convenio/:handle?' element={<RequireAuth><CadastroFinanceiroConvenio /></RequireAuth>} />

					<Route path='/financeiro/mensal' element={<RequireAuth><FinanceiroMensal titulo="Despesa Mensal" /></RequireAuth>} />
					<Route path='/financeiro/cadastro-mensal/:handle?' element={<RequireAuth><CadastroFinanceiroMensal /></RequireAuth>} />
					<Route path='/financeiro/recorrente' element={<RequireAuth><FinanceiroRecorrente titulo="Despesa Recorrente" /></RequireAuth>} />
					<Route path='/financeiro/cadastro-recorrente/:handle?' element={<RequireAuth><CadastroFinanceiroRecorrente /></RequireAuth>} />

					<Route path='/relatorio' element={<RequireAuth><RelatorioInicial/></RequireAuth>}/>
					<Route path='relatorio/clinica' element={<RequireAuth><PaginaGenericaRelatorio titulo={"Clinica"}/></RequireAuth>}/>
					<Route path='/relatorio/clinica/gerar-relatorio/:handle?' element={<RequireAuth>
						<RelatorioClinica/></RequireAuth>}/>

					<Route path='relatorio/paciente' element={<RequireAuth><PaginaGenericaRelatorio titulo={"Paciente"}/></RequireAuth>}/>
					<Route path='relatorio/paciente/gerar-relatorio/:handle?' element={<RequireAuth><RelatorioPaciente/></RequireAuth>}/>
					<Route path='relatorio/dentista' element={<RequireAuth><PaginaGenericaRelatorio titulo={"Dentista"} /></RequireAuth>}/>
					<Route path='relatorio/dentista/gerar-relatorio/:handle?' element={<RequireAuth><RelatorioDentista/></RequireAuth>}/> 
					<Route path='relatorio/convenio'element={<RequireAuth><PaginaGenericaRelatorio titulo={"Convenio"}/></RequireAuth>}/>
					<Route path='/relatorio/convenio/gerar-relatorio/:handle?' element={
						<RequireAuth><RelatorioConvenio/></RequireAuth>}/>
				</Routes>
			</div>
		
	);
}
