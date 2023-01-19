import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import FormCadastroConvenio from './componentes/FormCadastroConvenio';
import FormCadastroItem from './componentes/FormCadastroItem';
import FormCadastroPessoa from './componentes/FormCadastroPessoa';
import MenuLateral from './componentes/MenuLateral';
import Agenda from './paginas/Agenda'
import Cadastro from './paginas/Cadastro';
import PaginaGenerica from './paginas/PaginaGenerica';

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<PaginaGenerica />}/>
					<Route path='/paciente' element={<PaginaGenerica titulo="Paciente" />}/>
					<Route path='/paciente/cadastro' element={<Cadastro titulo="Paciente" componenteCadastro={<FormCadastroPessoa labelDinamica = "N. Prontuario" />}/>}/>

					<Route path='/dentista' element={<PaginaGenerica titulo="Dentista" />}/>
					<Route path='/dentista/cadastro' element={<Cadastro titulo="Dentista" componenteCadastro={<FormCadastroPessoa labelDinamica = "CRO"/>}/>}/>

					<Route path='/recepcionista' element={<PaginaGenerica titulo="Recepcionista" />}/>
					<Route path='/recepcionista/cadastro' element={<Cadastro titulo="Recepcionista"/>}/>

					<Route path='/procedimento' element={<PaginaGenerica titulo="Procedimento" />}/>
					<Route path='/procedimento/cadastro' element={<Cadastro titulo="Procedimento" componenteCadastro={<FormCadastroItem></FormCadastroItem>} />}/>

					<Route path='/especialidade' element={<PaginaGenerica titulo="Especialidade"/>} />
					<Route path='/especialidade/cadastro' element={<Cadastro titulo="Especialidade" componenteCadastro={<FormCadastroItem>
						<label htmlFor="inputEspecialidade">Especialidade:</label><input type="text" name='especialidade' required htmlFor="inputEspecialidade" />
						<br />
					</FormCadastroItem>}/>} />

					<Route path='/convenio' element={<PaginaGenerica titulo="Convenio" />} />
					<Route path='/convenio/cadastro' element={<Cadastro titulo="Convenio" componenteCadastro={<FormCadastroConvenio/>}/>} />

          			<Route path='/agenda' element={<Agenda />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
