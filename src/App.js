import AddBotão from './componentes/AddBotão';
import './App.css'
import BarraDePesquisa from './componentes/BarraDePesquisa';
import Tabela from './componentes/Tabela';
import MenuLateral from './componentes/MenuLateral';

function App() {
	return (
		<div className="container">
			<MenuLateral />
			<div className="conteudo-principal">
				<div className='cabeçalho-principal' >
					<h1>Título da Página</h1>
				</div>
				<div className='container-principal-central'>
					<div className='cabeçalho-central'>
						<BarraDePesquisa />
						<AddBotão />
					</div>
					<div className='conteudo-principal-central'>
						<Tabela />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
