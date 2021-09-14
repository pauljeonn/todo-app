import TodoTemplate from './components/todoTemplate/TodoTemplate';
import TodoHead from './components/todoHead/TodoHead';
import './app.scss';

function App() {
	return (
		<div className="App">
			{/* <TodoTemplate>안녕하세요!</TodoTemplate> */}
			<TodoTemplate children="안녕하세요">
				<TodoHead />
			</TodoTemplate>
		</div>
	);
}

export default App;
