import './app.scss';
import TodoTemplate from './components/todoTemplate/TodoTemplate';
import TodoHead from './components/todoHead/TodoHead';
import TodoList from './components/todoList/TodoList';
import TodoCreate from './components/todoCreate/TodoCreate';

function App() {
	return (
		<div className="App">
			{/* <TodoTemplate>안녕하세요!</TodoTemplate> */}
			<TodoTemplate children="안녕하세요">
				<TodoHead />
				<TodoList />
				<TodoCreate />
			</TodoTemplate>
		</div>
	);
}

export default App;
