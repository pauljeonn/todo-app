import './app.scss';
import TodoTemplate from './components/todoTemplate/TodoTemplate';
import TodoHead from './components/todoHead/TodoHead';
import TodoList from './components/todoList/TodoList';
import TodoCreate from './components/todoCreate/TodoCreate';
import { TodoProvider } from './TodoContext';

function App() {
	return (
		<div className="App">
			<TodoProvider>
				<TodoTemplate>
					<TodoHead />
					<TodoList />
					<TodoCreate />
				</TodoTemplate>
			</TodoProvider>
		</div>
	);
}

export default App;
